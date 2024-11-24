---
hasEditBtn: true
hasRefreshBtn: true
menuItem: mi-about-this-site
---

# hagenhausdb

# Tables

## countries

``` nonum sql
drop table if exists countries;
create table countries (
  id varchar(3) primary key,
  name varchar(64) not null
) character set = utf8;
```

## trees

``` nonum sql
drop table if exists trees;
create table trees (
  id int auto_increment primary key,
  birthYear int not null,
  city varchar(128) not null,
  country varchar(3) not null,
  description text not null,
  girth int not null,
  height int not null,
  lat decimal(10,7) not null,
  links json not null,
  lng decimal(10,7) not null,
  name varchar(128) not null,
  species json not null
) character set = utf8;
```

## users

``` nonum sql
drop table if exists users;
create table users (
  id int auto_increment primary key,
  firstName varchar(64) not null,
  lastName varchar(64) not null,
  email varchar(128) not null unique,
  password varchar(64) not null,
  street varchar(128),
  city varchar(128),
  region varchar(64),
  country varchar(128),
  postalCode varchar(24)
) character set = utf8;
```

# Procedures

## deleteUser

``` nonum sql
drop procedure if exists deleteUser;
delimiter //
create procedure deleteUser(in id int)
begin

  declare errno int;
  declare exit handler for sqlexception
  begin
  get current diagnostics condition 1 errno = mysql_errno;
  select errno as mysql_error;
  rollback;
  end;

  start transaction;
  select registries.id into @registryId 
  from ownerships inner join registries on ownerships.registryId = registries.id
  where ownerships.userId = id;
  delete from users where users.id = id; 
  call deleteRegistry(@registryId);
  commit;

end //
delimiter ;
```

## insertTree

``` nonum sql
drop procedure if exists insertTree;
delimiter //
create procedure insertTree(
  in birthYear int,
  in city varchar(128),
  in country varchar(3),
  in description text,
  in girth int,
  in height int,
  in lat decimal(10,7),
  in links json,
  in lng decimal(10,7),
  in name varchar(128),
  in species json,
  in fields varchar(256)
)
begin
  insert into trees (birthYear, city, country, description, girth, height, lat, links, lng, name, species) 
  values (birthYear, city, country, description, girth, height, lat, links, lng, name, species);
  if row_count() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unable to create tree.';
  else
    call selectRecord("trees", "id", LAST_INSERT_ID(), fields);
  end if;
end //
delimiter ;
```

## insertUser

``` nonum sql
drop procedure if exists insertUser;
delimiter //
create procedure insertUser(
  in firstName varchar(64), 
  in lastName varchar(64), 
  in email varchar(128),
  in password varchar(64),
  in street varchar(128),
  in city varchar(128),
  in region varchar(64),
  in country varchar(128),
  in postalCode varchar(24)
)
begin
  insert into users (firstName, lastName, email, password, street, city, region, country, postalCode) 
  values (firstName, lastName, email, password, street, city, region, country, postalCode);
  if row_count() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unable to create user.';
  else
    call selectUser(LAST_INSERT_ID());
  end if;
end //
delimiter ;
```

## selectUser

``` nonum sql
drop procedure if exists selectUser;
delimiter //
create procedure selectUser(in id int)
begin
  select id, firstName, lastName, email, street, city, region, country, postalCode from users where users.id = id;
  if found_rows() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such user';
  end if;
end //
delimiter ;
```

## selectUserByEmail

``` nonum sql
drop procedure if exists selectUserByEmail;
delimiter //
create procedure selectUserByEmail(in email varchar(128))
begin
  select id, firstName, lastName, email, password, street, city, region, country, postalCode from users where users.email = email;
  if found_rows() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such user';
  end if;
end //
delimiter ;
```

## selectUserCount

``` nonum sql
drop procedure if exists selectUserCount;
delimiter //
create procedure selectUserCount(
  in firstName varchar(64),
  in lastName varchar(64),
  in email varchar(128)
)
begin
  set @searchClause = "";
  set @operator = " and";
  set @count = 0;

  if firstName is not null then set @count = @count + 1;
  end if;
  if lastName is not null then set @count = @count + 1;
  end if;
  if email is not null then set @count = @count + 1;
  end if;

  if @count > 0 then
    set @searchClause = " where";
    if firstName is not null then
      set @searchClause = concat(@searchClause, " firstName like '%", firstName, "%'");
      set @count = @count - 1;
      if @count > 0 then
        set @searchClause = concat(@searchClause, @operator);
      end if;
    end if;
    if lastName is not null then
      set @searchClause = concat(@searchClause, " lastName like '%", lastName, "%'");
      set @count = @count - 1;
      if @count > 0 then
        set @searchClause = concat(@searchClause, @operator);
      end if;
    end if;
    if email is not null then
      set @searchClause = concat(@searchClause, " email like '%", email, "%'");
    end if;
  end if;

  set @query = concat("select count(*) as count from users", @searchClause);
  prepare stmt from @query;
  execute stmt;
  deallocate prepare stmt;
end //
delimiter ;
```

## selectUsers

``` nonum sql
drop procedure if exists selectUsers;
delimiter //
create procedure selectUsers(
  in firstName varchar(64),
  in lastName varchar(64),
  in email varchar(128),
  in `limit` int,
  in `offset` int,
  in sortField varchar(64),
  in sortDirection varchar(8)
)
begin
  set @searchClause = "";
  set @operator = " and";
  set @count = 0;
  set @limitClause = "";
  set @offsetClause = "";
  set @orderByClause = "";

  if firstName is not null then set @count = @count + 1;
  end if;
  if lastName is not null then set @count = @count + 1;
  end if;
  if email is not null then set @count = @count + 1;
  end if;

  if @count > 0 then
    set @searchClause = " where";
    if firstName is not null then
      set @searchClause = concat(@searchClause, " firstName like '%", firstName, "%'");
      set @count = @count - 1;
      if @count > 0 then
        set @searchClause = concat(@searchClause, @operator);
      end if;
    end if;
    if lastName is not null then
      set @searchClause = concat(@searchClause, " lastName like '%", lastName, "%'");
      set @count = @count - 1;
      if @count > 0 then
        set @searchClause = concat(@searchClause, @operator);
      end if;
    end if;
    if email is not null then
      set @searchClause = concat(@searchClause, " email like '%", email, "%'");
    end if;
  end if;

  if `limit` is not null then 
    set @limitClause = concat(" limit ", `limit`);
    if `offset` is not null then
      set @offsetClause = concat(" offset ", `offset`);
    end if;
  end if;

  if sortField is not null then 
    set @orderByClause = concat(" order by ", sortField);
    if sortDirection is not null then
      set @orderByClause = concat(@orderByClause, " ", sortDirection);
    end if;
  end if;

  set @query = concat("select id, firstName, lastName, email, street, city, region, country, postalCode from users", @searchClause, @orderByClause, @limitClause, @offsetClause);
  prepare stmt from @query;
  execute stmt;
  deallocate prepare stmt;
end //
delimiter ;
```

## verifyUser

``` nonum sql
drop procedure if exists verifyUser;
delimiter //
create procedure verifyUser(
  in id int
)
begin
  select count(*) as `exists` from users where users.id = id;
end //
delimiter ;
```


# Populate

## Populate countries

``` nonum sql
insert into countries(id, name) values("ABW", "Aruba");
insert into countries(id, name) values("AFG", "Afghanistan");
insert into countries(id, name) values("AGO", "Angola");
insert into countries(id, name) values("AIA", "Anguilla");
insert into countries(id, name) values("ALA", "Åland Islands");
insert into countries(id, name) values("ALB", "Albania");
insert into countries(id, name) values("AND", "Andorra");
insert into countries(id, name) values("ARE", "United Arab Emirates");
insert into countries(id, name) values("ARG", "Argentina");
insert into countries(id, name) values("ARM", "Armenia");
insert into countries(id, name) values("ASM", "American Samoa");
insert into countries(id, name) values("ATA", "Antarctica");
insert into countries(id, name) values("ATF", "French Southern Territories");
insert into countries(id, name) values("ATG", "Antigua and Barbuda");
insert into countries(id, name) values("AUS", "Australia");
insert into countries(id, name) values("AUT", "Austria");
insert into countries(id, name) values("AZE", "Azerbaijan");
insert into countries(id, name) values("BDI", "Burundi");
insert into countries(id, name) values("BEL", "Belgium");
insert into countries(id, name) values("BEN", "Benin");
insert into countries(id, name) values("BES", "Bonaire, Sint Eustatius and Saba");
insert into countries(id, name) values("BFA", "Burkina Faso");
insert into countries(id, name) values("BGD", "Bangladesh");
insert into countries(id, name) values("BGR", "Bulgaria");
insert into countries(id, name) values("BHR", "Bahrain");
insert into countries(id, name) values("BHS", "Bahamas");
insert into countries(id, name) values("BIH", "Bosnia and Herzegovina");
insert into countries(id, name) values("BLM", "Saint Barthélemy");
insert into countries(id, name) values("BLR", "Belarus");
insert into countries(id, name) values("BLZ", "Belize");
insert into countries(id, name) values("BMU", "Bermuda");
insert into countries(id, name) values("BOL", "Bolivia (Plurinational State of)");
insert into countries(id, name) values("BRA", "Brazil");
insert into countries(id, name) values("BRB", "Barbados");
insert into countries(id, name) values("BRN", "Brunei Darussalam");
insert into countries(id, name) values("BTN", "Bhutan");
insert into countries(id, name) values("BVT", "Bouvet Island");
insert into countries(id, name) values("BWA", "Botswana");
insert into countries(id, name) values("CAF", "Central African Republic");
insert into countries(id, name) values("CAN", "Canada");
insert into countries(id, name) values("CCK", "Cocos (Keeling) Islands");
insert into countries(id, name) values("CHE", "Switzerland");
insert into countries(id, name) values("CHL", "Chile");
insert into countries(id, name) values("CHN", "China");
insert into countries(id, name) values("CIV", "Côte d'Ivoire");
insert into countries(id, name) values("CMR", "Cameroon");
insert into countries(id, name) values("COD", "Congo (the Democratic Republic of the)");
insert into countries(id, name) values("COG", "Congo");
insert into countries(id, name) values("COK", "Cook Islands");
insert into countries(id, name) values("COL", "Colombia");
insert into countries(id, name) values("COM", "Comoros");
insert into countries(id, name) values("CPV", "Cabo Verde");
insert into countries(id, name) values("CRI", "Costa Rica");
insert into countries(id, name) values("CUB", "Cuba");
insert into countries(id, name) values("CUW", "Curaçao");
insert into countries(id, name) values("CXR", "Christmas Island");
insert into countries(id, name) values("CYM", "Cayman Islands");
insert into countries(id, name) values("CYP", "Cyprus");
insert into countries(id, name) values("CZE", "Czechia");
insert into countries(id, name) values("DEU", "Germany");
insert into countries(id, name) values("DJI", "Djibouti");
insert into countries(id, name) values("DMA", "Dominica");
insert into countries(id, name) values("DNK", "Denmark");
insert into countries(id, name) values("DOM", "Dominican Republic");
insert into countries(id, name) values("DZA", "Algeria");
insert into countries(id, name) values("ECU", "Ecuador");
insert into countries(id, name) values("EGY", "Egypt");
insert into countries(id, name) values("ERI", "Eritrea");
insert into countries(id, name) values("ESH", "Western Sahara");
insert into countries(id, name) values("ESP", "Spain");
insert into countries(id, name) values("EST", "Estonia");
insert into countries(id, name) values("ETH", "Ethiopia");
insert into countries(id, name) values("FIN", "Finland");
insert into countries(id, name) values("FJI", "Fiji");
insert into countries(id, name) values("FLK", "Falkland Islands [Malvinas]");
insert into countries(id, name) values("FRA", "France");
insert into countries(id, name) values("FRO", "Faroe Islands");
insert into countries(id, name) values("FSM", "Micronesia (Federated States of)");
insert into countries(id, name) values("GAB", "Gabon");
insert into countries(id, name) values("GBR", "United Kingdom");
insert into countries(id, name) values("GEO", "Georgia");
insert into countries(id, name) values("GGY", "Guernsey");
insert into countries(id, name) values("GHA", "Ghana");
insert into countries(id, name) values("GIB", "Gibraltar");
insert into countries(id, name) values("GIN", "Guinea");
insert into countries(id, name) values("GLP", "Guadeloupe");
insert into countries(id, name) values("GMB", "Gambia");
insert into countries(id, name) values("GNB", "Guinea-Bissau");
insert into countries(id, name) values("GNQ", "Equatorial Guinea");
insert into countries(id, name) values("GRC", "Greece");
insert into countries(id, name) values("GRD", "Grenada");
insert into countries(id, name) values("GRL", "Greenland");
insert into countries(id, name) values("GTM", "Guatemala");
insert into countries(id, name) values("GUF", "French Guiana");
insert into countries(id, name) values("GUM", "Guam");
insert into countries(id, name) values("GUY", "Guyana");
insert into countries(id, name) values("HKG", "Hong Kong");
insert into countries(id, name) values("HMD", "Heard Island and McDonald Islands");
insert into countries(id, name) values("HND", "Honduras");
insert into countries(id, name) values("HRV", "Croatia");
insert into countries(id, name) values("HTI", "Haiti");
insert into countries(id, name) values("HUN", "Hungary");
insert into countries(id, name) values("IDN", "Indonesia");
insert into countries(id, name) values("IMN", "Isle of Man");
insert into countries(id, name) values("IND", "India");
insert into countries(id, name) values("IOT", "British Indian Ocean Territory");
insert into countries(id, name) values("IRL", "Ireland");
insert into countries(id, name) values("IRN", "Iran (Islamic Republic of)");
insert into countries(id, name) values("IRQ", "Iraq");
insert into countries(id, name) values("ISL", "Iceland");
insert into countries(id, name) values("ISR", "Israel");
insert into countries(id, name) values("ITA", "Italy");
insert into countries(id, name) values("JAM", "Jamaica");
insert into countries(id, name) values("JEY", "Jersey");
insert into countries(id, name) values("JOR", "Jordan");
insert into countries(id, name) values("JPN", "Japan");
insert into countries(id, name) values("KAZ", "Kazakhstan");
insert into countries(id, name) values("KEN", "Kenya");
insert into countries(id, name) values("KGZ", "Kyrgyzstan");
insert into countries(id, name) values("KHM", "Cambodia");
insert into countries(id, name) values("KIR", "Kiribati");
insert into countries(id, name) values("KNA", "Saint Kitts and Nevis");
insert into countries(id, name) values("KOR", "Korea (the Republic of)");
insert into countries(id, name) values("KWT", "Kuwait");
insert into countries(id, name) values("LAO", "Lao People's Democratic Republic");
insert into countries(id, name) values("LBN", "Lebanon");
insert into countries(id, name) values("LBR", "Liberia");
insert into countries(id, name) values("LBY", "Libya");
insert into countries(id, name) values("LCA", "Saint Lucia");
insert into countries(id, name) values("LIE", "Liechtenstein");
insert into countries(id, name) values("LKA", "Sri Lanka");
insert into countries(id, name) values("LSO", "Lesotho");
insert into countries(id, name) values("LTU", "Lithuania");
insert into countries(id, name) values("LUX", "Luxembourg");
insert into countries(id, name) values("LVA", "Latvia");
insert into countries(id, name) values("MAC", "Macao");
insert into countries(id, name) values("MAF", "Saint Martin (French part)");
insert into countries(id, name) values("MAR", "Morocco");
insert into countries(id, name) values("MCO", "Monaco");
insert into countries(id, name) values("MDA", "Moldova (the Republic of)");
insert into countries(id, name) values("MDG", "Madagascar");
insert into countries(id, name) values("MDV", "Maldives");
insert into countries(id, name) values("MEX", "Mexico");
insert into countries(id, name) values("MHL", "Marshall Islands");
insert into countries(id, name) values("MKD", "Republic of North Macedonia");
insert into countries(id, name) values("MLI", "Mali");
insert into countries(id, name) values("MLT", "Malta");
insert into countries(id, name) values("MMR", "Myanmar");
insert into countries(id, name) values("MNE", "Montenegro");
insert into countries(id, name) values("MNG", "Mongolia");
insert into countries(id, name) values("MNP", "Northern Mariana Islands");
insert into countries(id, name) values("MOZ", "Mozambique");
insert into countries(id, name) values("MRT", "Mauritania");
insert into countries(id, name) values("MSR", "Montserrat");
insert into countries(id, name) values("MTQ", "Martinique");
insert into countries(id, name) values("MUS", "Mauritius");
insert into countries(id, name) values("MWI", "Malawi");
insert into countries(id, name) values("MYS", "Malaysia");
insert into countries(id, name) values("MYT", "Mayotte");
insert into countries(id, name) values("NAM", "Namibia");
insert into countries(id, name) values("NCL", "New Caledonia");
insert into countries(id, name) values("NER", "Niger");
insert into countries(id, name) values("NFK", "Norfolk Island");
insert into countries(id, name) values("NGA", "Nigeria");
insert into countries(id, name) values("NIC", "Nicaragua");
insert into countries(id, name) values("NIU", "Niue");
insert into countries(id, name) values("NLD", "Netherlands");
insert into countries(id, name) values("NOR", "Norway");
insert into countries(id, name) values("NPL", "Nepal");
insert into countries(id, name) values("NRU", "Nauru");
insert into countries(id, name) values("NZL", "New Zealand");
insert into countries(id, name) values("OMN", "Oman");
insert into countries(id, name) values("PAK", "Pakistan");
insert into countries(id, name) values("PAN", "Panama");
insert into countries(id, name) values("PCN", "Pitcairn");
insert into countries(id, name) values("PER", "Peru");
insert into countries(id, name) values("PHL", "Philippines");
insert into countries(id, name) values("PLW", "Palau");
insert into countries(id, name) values("PNG", "Papua New Guinea");
insert into countries(id, name) values("POL", "Poland");
insert into countries(id, name) values("PRI", "Puerto Rico");
insert into countries(id, name) values("PRK", "Korea (the Democratic People's Republic of)");
insert into countries(id, name) values("PRT", "Portugal");
insert into countries(id, name) values("PRY", "Paraguay");
insert into countries(id, name) values("PSE", "Palestine, State of");
insert into countries(id, name) values("PYF", "French Polynesia");
insert into countries(id, name) values("QAT", "Qatar");
insert into countries(id, name) values("REU", "Réunion");
insert into countries(id, name) values("ROU", "Romania");
insert into countries(id, name) values("RUS", "Russian Federation");
insert into countries(id, name) values("RWA", "Rwanda");
insert into countries(id, name) values("SAU", "Saudi Arabia");
insert into countries(id, name) values("SDN", "Sudan");
insert into countries(id, name) values("SEN", "Senegal");
insert into countries(id, name) values("SGP", "Singapore");
insert into countries(id, name) values("SGS", "South Georgia and the South Sandwich Islands");
insert into countries(id, name) values("SHN", "Saint Helena, Ascension and Tristan da Cunha");
insert into countries(id, name) values("SJM", "Svalbard and Jan Mayen");
insert into countries(id, name) values("SLB", "Solomon Islands");
insert into countries(id, name) values("SLE", "Sierra Leone");
insert into countries(id, name) values("SLV", "El Salvador");
insert into countries(id, name) values("SMR", "San Marino");
insert into countries(id, name) values("SOM", "Somalia");
insert into countries(id, name) values("SPM", "Saint Pierre and Miquelon");
insert into countries(id, name) values("SRB", "Serbia");
insert into countries(id, name) values("SSD", "South Sudan");
insert into countries(id, name) values("STP", "Sao Tome and Principe");
insert into countries(id, name) values("SUR", "Suriname");
insert into countries(id, name) values("SVK", "Slovakia");
insert into countries(id, name) values("SVN", "Slovenia");
insert into countries(id, name) values("SWE", "Sweden");
insert into countries(id, name) values("SWZ", "Eswatini");
insert into countries(id, name) values("SXM", "Sint Maarten (Dutch part)");
insert into countries(id, name) values("SYC", "Seychelles");
insert into countries(id, name) values("SYR", "Syrian Arab Republic");
insert into countries(id, name) values("TCA", "Turks and Caicos Islands");
insert into countries(id, name) values("TCD", "Chad");
insert into countries(id, name) values("TGO", "Togo");
insert into countries(id, name) values("THA", "Thailand");
insert into countries(id, name) values("TJK", "Tajikistan");
insert into countries(id, name) values("TKL", "Tokelau");
insert into countries(id, name) values("TKM", "Turkmenistan");
insert into countries(id, name) values("TLS", "Timor-Leste");
insert into countries(id, name) values("TON", "Tonga");
insert into countries(id, name) values("TTO", "Trinidad and Tobago");
insert into countries(id, name) values("TUN", "Tunisia");
insert into countries(id, name) values("TUR", "Turkey");
insert into countries(id, name) values("TUV", "Tuvalu");
insert into countries(id, name) values("TWN", "Taiwan (Province of China)");
insert into countries(id, name) values("TZA", "Tanzania, United Republic of");
insert into countries(id, name) values("UGA", "Uganda");
insert into countries(id, name) values("UKR", "Ukraine");
insert into countries(id, name) values("UMI", "United States Minor Outlying Islands");
insert into countries(id, name) values("URY", "Uruguay");
insert into countries(id, name) values("USA", "United States");
insert into countries(id, name) values("UZB", "Uzbekistan");
insert into countries(id, name) values("VAT", "Holy See");
insert into countries(id, name) values("VCT", "Saint Vincent and the Grenadines");
insert into countries(id, name) values("VEN", "Venezuela (Bolivarian Republic of)");
insert into countries(id, name) values("VGB", "Virgin Islands (British)");
insert into countries(id, name) values("VIR", "Virgin Islands (U.S.)");
insert into countries(id, name) values("VNM", "Viet Nam");
insert into countries(id, name) values("VUT", "Vanuatu");
insert into countries(id, name) values("WLF", "Wallis and Futuna");
insert into countries(id, name) values("WSM", "Samoa");
insert into countries(id, name) values("YEM", "Yemen");
insert into countries(id, name) values("ZAF", "South Africa");
insert into countries(id, name) values("ZMB", "Zambia");
insert into countries(id, name) values("ZWE", "Zimbabwe");
```

## Populate trees

``` sql
insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'Tree of Life',
  'The Tree of Life (Shajarat-al-Hayat) in Bahrain is a 9.75 meters (32 feet) high Prosopis cineraria tree that is over 400 years old. It is on a hill in a barren area of the Arabian Desert, 2 kilometers (1.2 miles) from Jebel Dukhan, the highest point in Bahrain, and 40 kilometers from Manama.',
  '{"link": "https://en.wikipedia.org/wiki/Prosopis_cineraria", "text": "Prosopis cineraria"}',
  25.994073,
  50.583235,
  'Bahrain',
  'BHR',
  1582,
  32,
  '[{"link": "https://en.wikipedia.org/wiki/Tree_of_Life_(Bahrain)", "text": "Wikipedia"},{"link": "https://www.atlasobscura.com/places/tree-of-life", "text": "Atlas Obscura"}]',
  0
);
 
insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'Lone Cypress',
  'The Lone Cypress is a Monterey cypress tree located in Pebble Beach, California. Standing atop a granite headland overlooking Carmel Bay, the tree has become a Western icon and has been called one of the most photographed trees in North America.',
  '{"link": "https://en.wikipedia.org/wiki/Cupressus_macrocarpa", "text": "Cupressus macrocarpa"}',
  36.568747,
  -121.96521,
  'Pebble Beach',
  'USA',
  1750,
  25,
  '[{"link": "https://en.wikipedia.org/wiki/Lone_Cypress", "text": "Wikipedia"},{"link": "https://www.worldatlas.com/articles/what-and-where-is-lone-cypress.html", "text": "World Atlas"}]',
  0
);

insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'Cotton Tree',
  'The Cotton Tree is a Ceiba pentandra, also known commonly as a kapok tree, a historic symbol of Freetown, the capital city of Sierra Leone. The Cotton Tree gained importance in 1792 when a group of formerly enslaved African Americans, who had gained their freedom by fighting for the British during the American War of Independence, settled the site of modern Freetown. These former Black Loyalist soldiers, also known as Black Nova Scotians (because they came from Nova Scotia after leaving the United States), resettled in Sierra Leone and founded Freetown on March 11, 1792. The descendants of the Nova Scotian settlers form part of the Sierra Leone Creole ethnicity today.',
  '{"link": "https://en.wikipedia.org/wiki/Ceiba_pentandra", "text": "Ceiba pentandra"}',
  8.4872,
  -13.2356,
  'Freetown',
  'SLE',
  1500,
  253,
  '[{"link": "https://en.wikipedia.org/wiki/Cotton_Tree_(Sierra_Leone)", "text": "Wikipedia"},{"link": "https://www.atlasobscura.com/places/cotton-tree-freetown", "text": "Atlas Obscura"}]',
  0
);
 
insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'Boab Prison Tree',
  'The Baobab Prison Tree, Derby is a 1,500-year-old, large hollow Adansonia gregorii (Baobab) tree 6 kilometres south of Derby, Western Australia with a girth of 14.7 metres. It had been reputed to have been used in the 1890s as a lockup for indigenous Australian prisoners on their way to Derby for sentencing, but there is no evidence that it was ever used to house prisoners.',
  '{"link": "https://en.wikipedia.org/wiki/Adansonia_gregorii", "text": "Adansonia gregorii"}',
  -17.3507,
  123.6699,
  'Derby',
  'AUS',
  500,
  46,
  '[{"link": "https://en.wikipedia.org/wiki/Boab_Prison_Tree,_Derby", "text": "Wikipedia"},{"link": "https://www.monumentaltrees.com/en/aus/mainland/westernaustralia/28004_thekingriverroad35kmsouthofwyndham/", "text": "Monumental Trees"}]',
  48
);
 
insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'Árbol del Tule',
  'El Árbol del Tule is a tree located in the church grounds in the town center of Santa María del Tule in the Mexican state of Oaxaca, approximately 9 km (6 mi) east of the city of Oaxaca on the road to Mitla. It is a Montezuma cypress (Taxodium mucronatum), or ahuehuete (meaning "old man of the water" in Nahuatl). It has the stoutest tree trunk in the world. In 2001, it was placed on a UNESCO tentative list of World Heritage Sites, but was removed from the list in 2013.',
  '{"link": "https://en.wikipedia.org/wiki/Taxodium_mucronatum", "text": "Taxodium mucronatum"}',
  17.0465308,
  -96.6365872,
  'Santa María del Tule',
  'MEX',
  400,
  116,
  '[{"link": "https://en.wikipedia.org/wiki/%C3%81rbol_del_Tule", "text": "Wikipedia"},{"link": "https://www.tripadvisor.com/Attraction_Review-g7158692-d155101-Reviews-Tule_Tree-Santa_Maria_del_Tule_Southern_Mexico.html", "text": "TripAdvisor"}]',
  46
);
 
insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'Major Oak',
  "The Major Oak is a large English oak (Quercus robur) near the village of Edwinstowe in the midst of Sherwood Forest, Nottinghamshire, England. According to local folklore, it was Robin Hood's shelter where he and his merry men slept. It weighs an estimated 23 tons, has a girth of 33 feet (10 metres), a canopy of 92 feet (28 metres), and is about 800–1000 years old. In 2014, it was voted 'England's Tree of the Year' by a public poll by the Woodland Trust, receiving 18% of the votes. Its name originates from Major Hayman Rooke's description of it in 1790.",
  '{"link": "https://en.wikipedia.org/wiki/Quercus_robur", "text": "Quercus robur"}',
  53.204639,
  -1.072444,
  'Edwinstowe',
  'GBR',
  1100,
  52,
  '[{"link": "https://en.wikipedia.org/wiki/Major_Oak", "text": "Wikipedia"},{"link": "https://www.atlasobscura.com/places/major-oak", "text": "Atlas Obscura"}]',
  33
);

insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'General Sherman',
  'General Sherman is a giant sequoia (Sequoiadendron giganteum) tree located in the Giant Forest of Sequoia National Park in Tulare County, in the U.S. state of California. By volume, it is the largest known living single-stem tree on Earth. It is estimated to be around 2,200 to 2,700 years old.',
  '{"link": "https://en.wikipedia.org/wiki/Sequoiadendron_giganteum", "text": "Sequoiadendron giganteum"}',
  36.581667,
  -118.751528,
  'Fresno',
  'USA',
  -500,
  60,
  '[{"link": "https://en.wikipedia.org/wiki/General_Sherman_(tree)", "text": "Wikipedia"}]',
  103
);
 
insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'Jaya Sri Maha Bodhi',
  'Jaya Sri Maha Bodhi (Sinhala: ජය ශ්‍රී මහා බොධිය) is a sacred bo tree in the Mahamewna Garden in historical city of Anuradhapura, Sri Lanka. This is believed to be a tree grown from a cutting of the southern branch from the historical sacred bo tree, Sri Maha Bodhi, at Buddha Gaya in India, under which Siddhartha Gautama (Buddha) attained Enlightenment. The Buddhist nun Sangamitta Maha Theri, a daughter of Indian Emperor Ashoka, in 288 BC, brought the tree cutting to Sri Lanka during the reign of Sinhalese King Devanampiya Tissa. It is the oldest living human-planted tree in the world with a known planting date and is more than 2300 years old now. The Mahavamsa, or the great chronicle of the Sinhalese, provides an elaborate account of the establishment of the Jaya Siri Maha Bodhi on the Island and the subsequent development of the site as a major Buddhist pilgrimage site.',
  '{"link": "https://en.wikipedia.org/wiki/Ficus_religiosa", "text": "Ficus religiosa"}',
  8.344722,
  80.396667,
  'Anuradhapura',
  'LKA',
  -288,
  21.3,
  '[{"link": "https://en.wikipedia.org/wiki/Jaya_Sri_Maha_Bodhi", "text": "Wikipedia"},{"link": "https://www.atlasobscura.com/places/jaya-sri-maha-bodhi-tree", "text": "Atlas obscura"}]',
  0
);
 
insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'The Ashbrittle Yew',
  'The Ashbrittle Yew is an ancient yew tree (Taxus baccata) located in the village of Ashbrittle, Somerset, in southwest England. The yew grows on a tumulus in the southeast end of the churchyard of St. John the Baptist. Yews are capable of living for several thousands of years; the Ashbrittle Yew itself is believed to be over 3,000 years old, but defining its precise age is difficult due to its hollow centre. The tree is formed of a hollow central trunk surrounded by six narrower boles. In 2015 its measured diameter was 39 feet 11 inches.',
  '{"link": "https://en.wikipedia.org/wiki/Taxus_baccata", "text": "Taxus baccata"}',
  50.9808,
  -3.275,
  'Ashbrittle',
  'GBR',
  -800,
  0,
  '[{"link": "https://en.wikipedia.org/wiki/Ashbrittle_Yew", "text": "Wikipedia"},{"link": "https://www.monumentaltrees.com/en/gbr/england/somerset/7648_parishchurchyard/", "text": "Monumental Trees"}]',
  40
);
 
insert into trees (name, description, species, lat, lng, city, country, birthYear, height, links, girth) values (
  'Burke and Wills Dig Tree',
  'The Dig Tree is a heritage-listed, blazed, eucalyptus tree at Nappa Merrie Station, Durham, Shire of Bulloo, Queensland, Australia. It was blazed on 21 April 1861. It was added to the Queensland Heritage Register on 28 February 2003. The Burke and Wills Dig Tree on the banks of Cooper\'s Creek is associated with explorers Robert O\'Hara Burke and William John Wills. The tree was one of two trees blazed on 21 April 1861 by William Brahe and party who had remained at Cooper\'s Creek while Burke, Wills, Charles Gray and John King forged ahead to the northern coast of Australia. Brahe\'s party was finally forced to abandon the depot and trek homewards, leaving a message pointing to a cache of buried stores.',
  '{"link": "https://en.wikipedia.org/wiki/Eucalyptus", "text": "Eucalyptus"}',
  -27.6237,
  141.0758,
  'Durham',
  'AUS',
  1780,
  0,
  '[{"link": "https://en.wikipedia.org/wiki/Burke_and_Wills_Dig_Tree", "text": "Wikipedia"}]',
  0
);

call insertTree(
  '1922', 
  'Morioka', 
  'JPN', 
  'The solitary cherry tree stands in Koiwai Farm, a privately owned farm not far from Iwate’s capital city Morioka (盛岡市 Morioka-shi). With over 500,000 visitors annually, the farm is immensely popular among the locals, and has been around since its establishment in 1891. In fact, the tree was said to be planted over 100 years ago too, and since then many people have visited the farm during different seasons just to see it. But among all the seasons, spring is often considered the best to see the tree in its full glory.',
  '0', 
  '0', 
  '39.7560461061616', 
  '[{"link":"https://japanrailtimes.japanrailcafe.com.sg/web/article/seasons/sakura-series-4","text":"Japan Rail Cafe"},{"link":"https://www.koiwai.co.jp/makiba/","text":"Koiwai Farm"}]',
  '141.004011260734',
  'Koiwai Farm Ipponzakura',
  '{"link":"https://en.wikipedia.org/wiki/Prunus_serrulata","text":"Prunus serrulata"}',
  '*'
);

call insertTree(
  '1870', 
  'Amsterdam', 
  'NLD', 
  'The Anne Frank tree was a horse-chestnut tree in the city center of Amsterdam that was featured in Anne Frank’s The Diary of a Young Girl. Anne Frank described the tree from The Annexe, the building where she and her family were hiding from the Nazis during World War II.',
  '0', 
  '0', 
  '52.375194', 
  '[{"link":"https://en.wikipedia.org/wiki/Anne_Frank_tree","text":"Wikipedia"},{"link":"https://www.annefrank.org/en/anne-frank/front-section/chestnut-tree/","text":"Anne Frank House"}]',
  '4.884639',
  'Anne Frank Tree',
  '{"link":"https://en.wikipedia.org/wiki/Aesculus_hippocastanum","text":"Aesculus hippocastanum"}',
  '*'
);
```