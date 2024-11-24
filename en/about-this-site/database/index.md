---
hasEditBtn: true
hasRefreshBtn: true
menuItem: mi-about-this-site
---

# Database

# Procedures

## deleteRecord

``` nonum sql
drop procedure if exists deleteRecord;
delimiter //
create procedure deleteRecord(
  in `table` varchar(32),
  in idField varchar(40),
  in id varchar(40)
)
begin
  set @query = concat("delete from ", `table`, " where ", `table`, ".", idField, " like ", "'", id, "'");
  prepare stmt from @query;
  execute stmt;
  set @rowCount = row_count();
  deallocate prepare stmt;
  if @rowCount = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such record';
  end if;
end //
delimiter ;
```

## selectIdField

``` nonum sql
drop procedure if exists selectIdField;
delimiter //
create procedure selectIdField(in `table` varchar(32))
begin
  set @query = concat("show columns from ", `table`, " where `Key` = 'PRI'");
  prepare stmt from @query;
  execute stmt;
  deallocate prepare stmt;
  if found_rows() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such table';
  end if;
end //
delimiter ;
```

## selectRecord

``` nonum sql
drop procedure if exists selectRecord;
delimiter //
create procedure selectRecord(
  in `table` varchar(32),
  in idField varchar(40),
  in id varchar(40),
  in fields varchar(1024)
)
begin
  set @fields = "*";
  if fields is not null then
    set @fields = fields;
  end if;
  set @query = concat("select ", @fields, " from ", `table`, " where ", `table`, ".", idField, " like ", "'", id, "'");
  prepare stmt from @query;
  execute stmt;
  deallocate prepare stmt;
  if found_rows() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such record';
  end if;
end //
delimiter ;
```

## selectRecordCount

``` nonum sql
drop procedure if exists selectRecordCount;
delimiter //
create procedure selectRecordCount(
  in `table` varchar(32),
  in filter varchar(256)
)
begin
  set @filter = "";
  if filter is not null then
    set @filter = concat(" ", filter);
  end if;
  set @query = concat("select count(*) as count from ", `table`, @filter);
  prepare stmt from @query;
  execute stmt;
  deallocate prepare stmt;
end //
delimiter ;
```

## selectRecordFields

``` nonum sql
drop procedure if exists selectRecordFields;
delimiter //
create procedure selectRecordFields(
  in `table` varchar(32)
)
begin
  set @query = concat("describe ", `table`);
  prepare stmt from @query;
  #select @query;
  execute stmt;
  deallocate prepare stmt;
end //
delimiter ;
```

## selectRecords

``` nonum sql
drop procedure if exists selectRecords;
delimiter //
create procedure selectRecords(
  in `table` varchar(32),
  in fields varchar(1024),
  in filter varchar(256),
  in `order` varchar(256),
  in page varchar(64)
)
begin
  set @fields = "*";
  set @filter = "";
  set @order = "";
  set @page = "";
  if fields is not null then
    set @fields = fields;
  end if;
  if filter is not null then
    set @filter = concat(" ", filter);
  end if;
  if `order` is not null then
    set @order = concat(" ", `order`);
  end if;
  if page is not null then
    set @page = concat(" ", page);
  end if;
  set @query = concat("select ", @fields, " from ", `table`, @filter, @order, @page);
  prepare stmt from @query;
  #select @query;
  execute stmt;
  deallocate prepare stmt;
end //
delimiter ;
```

## updateRecord

``` nonum sql
drop procedure if exists updateRecord;
delimiter //
create procedure updateRecord(
  in `table` varchar(32),
  in idField varchar(40),
  in id varchar(40),
  in `updates` varchar(256)
)
begin
  set @query = concat("update ", `table`, " set ", `updates`, " where ", `table`, ".", idField, " like ", "'", id, "'");
  prepare stmt from @query;
  execute stmt;
  set @rowCount = row_count();
  deallocate prepare stmt;
  if @rowCount = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No such record';
  end if;
end //
delimiter ;
```
