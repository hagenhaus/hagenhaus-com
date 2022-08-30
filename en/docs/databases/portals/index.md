---
author: Matt Hagen
---

# Portals Database

# Stored Procedures

## &#35; insertPortal

``` nonum
drop procedure if exists insertPortal;
delimiter //
create procedure insertPortal(
  in name varchar(128),
  in url text,
  in companyId varchar(40),
  in fields varchar(256),
  in allowJoinedFields boolean
)
begin
  set @uuid = uuid();
  insert into portals (id, name, url, companyId) 
  values (@uuid, name, url, companyId);
  if row_count() = 0 then 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Unable to create record.';
  elseif allowJoinedFields is true then
    call selectRecord("portalsview", "id", @uuid, fields);
  else
    call selectRecord("portals", "id", @uuid, fields);
  end if;
end //
delimiter ;
```