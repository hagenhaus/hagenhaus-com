---
author: Matt Hagen
---

# Baseball Database

# Stored Procedures

## &#35; insertPlayer

``` nonum
drop procedure if exists insertPlayer;
delimiter //
create procedure insertPlayer(
  in playerID varchar(9),
  in nameFirst varchar(255),
  in nameLast varchar(255),
  in birthYear int,
  in birthMonth int,
  in birthDay int,
  in birthCountry varchar(255),
  in birthState varchar(255),
  in birthCity varchar(255),
  in deathYear int,
  in deathMonth int,
  in deathDay int,
  in deathCountry varchar(255),
  in deathState varchar(255),
  in deathCity varchar(255),
  in nameGiven varchar(255),
  in weight int,
  in height int,
  in bats varchar(255),
  in throws varchar(255),
  in debut varchar(255),
  in finalGame varchar(255),
  in retroID varchar(255),
  in bbrefID varchar(255),
  in birth_date date,
  in debut_date date,
  in finalgame_date date,
  in death_date date,
  in fields varchar(256),
  in allowJoinedFields boolean
)
begin
  insert into people (playerID, nameFirst, nameLast, birthYear, birthMonth, birthDay, birthCountry, birthState, birthCity, deathYear, deathMonth, deathDay, deathCountry, deathState, deathCity, nameGiven, weight, height, bats, throws, debut, finalGame, retroID, bbrefID, birth_date, debut_date, finalgame_date, death_date) 
  values (playerID, nameFirst, nameLast, birthYear, birthMonth, birthDay, birthCountry, birthState, birthCity, deathYear, deathMonth, deathDay, deathCountry, deathState, deathCity, nameGiven, weight, height, bats, throws, debut, finalGame, retroID, bbrefID, birth_date, debut_date, finalgame_date, death_date);
  if row_count() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unable to create record.';
  elseif allowJoinedFields is true then
    call selectRecord("people", "playerID", playerID, fields);
  else
    call selectRecord("people", "playerID", playerID, fields);
  end if;
end //
delimiter ;
```

## &#35; insertPark

``` nonum
drop procedure if exists insertPark;
delimiter //
create procedure insertPark(
  in parkalias varchar(255),
  in parkkey varchar(255),
  in parkname varchar(255),
  in city varchar(255),
  in state varchar(255),
  in country varchar(255),
  in fields varchar(256),
  in allowJoinedFields boolean
)
begin
  insert into parks (parkalias, parkkey, parkname, city, state, country) 
  values (parkalias, parkkey, parkname, city, state, country);
  if row_count() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unable to create record.';
  elseif allowJoinedFields is true then
    call selectRecord("parks", "ID", LAST_INSERT_ID(), fields);
  else
    call selectRecord("parks", "ID", LAST_INSERT_ID(), fields);
  end if;
end //
delimiter ;
```