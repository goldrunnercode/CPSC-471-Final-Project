INSERT IGNORE INTO pharmacy(PharmacyName,Address)
VALUES('Alberta Childrens Hospital','28 Oki Dr NW, Calgary, AB T3B 6A8'),
('Core Pharmacy & Compounding', '722 85 St SW, Calgary, AB T3H 1S6'),
('Varsity Pharmacy','402 Collegiate Blvd. #291, Calgary, AB T2N 1N4'),
('Wellness Pharmacy','4625 Varsity Dr NW #107, Calgary, AB T3A 0X9');
SELECT * FROM pharmacy;

INSERT IGNORE INTO Supplier(SupplierName, Address)
VALUES ('Big Medicine Company', "1234 gabe street TL5 5A5"),
('Small Medicine Company', "Sesame street NW Calgary AB8 65M");
SELECT * FROM Supplier;

INSERT IGNORE INTO Medication(MedName,AddictiveStatus)
VALUES('Fluoxetine', false),
('Fycompa',true),
('Flecainide', false),
('Fluvoxamine', false),
('Banzel', false);
SELECT * FROM Medication;

INSERT IGNORE INTO Supply(PharmacyName, SupplierName, MedName)
VALUES('Varsity Pharmacy', 'Small Medicine Company', 'Fycompa'),
('Varsity Pharmacy', 'Small Medicine Company', 'Flecainide'),
('Varsity Pharmacy', 'Small Medicine Company', 'Fluvoxamine'),
('Alberta Childrens Hospital', 'Big Medicine Company', 'Banzal'),
('Alberta Childrens Hospital', 'Small Medicine Company', 'Fluvoxamine'),
('Core Pharmacy & Compounding', 'Small Medicine Company', 'Banzal'),
('Core Pharmacy & Compounding', 'Big Medicine Company', 'Fycompa'),
('Core Pharmacy & Compounding', 'Big Medicine Company', 'Flecainide'),
('Wellness Pharmacy', 'Big Medicine Company', 'Fluvoxamine');
SELECT * FROM Supply;

INSERT IGNORE INTO PharmacyStaff(EmailAddress, Fname, LName, EmployerCompany)
VALUES('JoeShmoe@gmail.com','Joe','Shmoe','Wellness Pharmacy'),
('rick.pickle@Yahoo.com','Rick','Pickle','Wellness Pharmacy'),
('kermit.thefrog@muppets.com','Kermit','The Frog','Varsity Pharmacy'),
('misspiggy@muppets.com', 'Miss', 'Piggy', 'Varsity Pharmacy'),
('johnny.test@flaminghair.com', 'Jonathan', 'Test', 'Core Pharmacy & Compounding'),
('dannyphantom@gmail.com', 'Danny', 'Fenton', 'Core Pharmacy & Compounding'),
('mortimerthethird@Yahoo.com', 'Morty', 'Sanchez', 'Alberta Childrens Hospital');
SELECT * FROM PharmacyStaff;

INSERT IGNORE INTO Customer(EmailAddress,FName, LName, PickupPharmacy)
VALUES('GarryVee@Yahhoo.com', 'Garry','Vee', 'Varsity Pharmacy'),
('EvanLesterISTHECOOLEST@bingbong.com', 'Evan', 'Lester', 'Wellness Pharmacy'),
('DaveMyman@CPSC471Rocks.com', 'Dave', 'Muttonchop','Core Pharmacy & Compounding'),
('chessmaster@chess.com', 'Garry', 'Kasparov', 'Wellness Pharmacy'),
('justin.parker@evanlovers.com', 'Justin', 'Parker', 'Varsity Pharmacy'),
('gianluke.adug@evanlovers.com','Gian Luke', 'Adug', 'Core Pharmacy & Compounding');
SELECT * FROM CUSTOMER;

INSERT IGNORE INTO orders(MedName, EstArrival, Quantity, Status, CustomerEmail, StaffEmail, CompanyName, OPharmacyName)
VALUES('Fluvoxamine', '2022-12-25', 7,'Processing', 'chessmaster@chess.com','mortimerthethird@Yahoo.com','Medicine Delivery Company', 'Varsity Pharmacy'),
('Fluvoxamine','2022-11-13', 7,'Delivered', 'DaveMyman@CPSC471Rocks.com','johnny.test@flaminghair.com','Better Medicine Delivery Company', 'Alberta Childrens Hospital');
SELECT * FROM orders;

