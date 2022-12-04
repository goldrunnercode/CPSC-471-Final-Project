INSERT IGNORE INTO orders(MedName, PickupLocation, EstArrival, Quantity, Status, CustomerEmail, StaffEmail, CompanyName, OPharmacyName)
VALUES('Fluvoxamine', 'Varsity Pharmacy', '2022-12-25', 7,'Processing', 'chessmaster@chess.com','mortimerthethird@Yahoo.com','Medicine Delivery Company', 'Varsity Pharmacy'),
('Fluvoxamine', 'Alberta Childrens Hospital', '2022-11-13', 7,'Delivered', 'DaveMyman@CPSC471Rocks.com','johnny.test@flaminghair.com','Better Medicine Delivery Company', 'Alberta Childrens Hospital');
SELECT * FROM orders;