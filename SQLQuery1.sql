

create table tblcountry
(
	Id int primary key identity,
	Name nvarchar(30)
)


create table tblcity
(
	Id int identity primary key,
	Name nvarchar(30),
	CountryId int foreign key references tblcountry(Id)
)


insert into tblcountry values('India'),('USA'),('UK')

insert into tblcity values ('Mumbai',1),('Delhi',1),('Bangalore',1),('Chennai',1),('New York',2),('Los Angeles',2),('London',3)

