CREATE DATABASE IF NOT EXISTS fullStore;

USE fullStore;
CREATE TABLE IF NOT EXISTS Pharmacy (
    PharmacyName VARCHAR(255) NOT NULL,
    Address VARCHAR(255),
    PRIMARY KEY (PharmacyName),
    CurrentOrders INT(12)
);
CREATE TABLE IF NOT EXISTS Supplier
(
SupplierName varchar(255) NOT NULL,
Address varchar(255),
PRIMARY KEY (SupplierName)
);
CREATE TABLE IF NOT EXISTS Medication
(
MedName varchar(255) NOT NULL,
AddictiveStatus boolean,
PRIMARY KEY (MedName)
);
CREATE TABLE IF NOT EXISTS Supply
(
PharmacyName varchar(255),
SupplierName varchar(255),
MedName varchar(255),
FOREIGN KEY (PharmacyName) REFERENCES Pharmacy (PharmacyName),
FOREIGN KEY (SupplierName) REFERENCES Supplier (SupplierName),
FOREIGN KEY (MedName) REFERENCES Medication (MedName)
);
CREATE TABLE IF NOT EXISTS PharmacyStaff
(
EmailAddress varchar(255) NOT NULL,
Fname varchar(255),
LName varchar(255),
EmployerCompany varchar(255),
PRIMARY KEY (EmailAddress),
FOREIGN KEY (EmployerCompany) REFERENCES Pharmacy (PharmacyName)
);
CREATE TABLE IF NOT EXISTS Customer
(
EmailAddress varchar(255) NOT NULL,
Fname varchar(255),
LName varchar(255),
PickupPharmacy varchar(255),
PickupMonth int(2),
PickupDay int(2),
PickupYear int(4),
PRIMARY KEY (EmailAddress),
FOREIGN KEY (PickupPharmacy) REFERENCES Pharmacy (PharmacyName)
);

CREATE TABLE IF NOT EXISTS Orders
(
OrderNo int(12) NOT NULL AUTO_INCREMENT,
MedName varchar(255),
PickupLocation varchar(255),
EstArrival varchar(255),
Quantity int(6),
Status varchar(255),
CustomerEmail varchar(255),
StaffEmail varchar(255),
CompanyName varchar(255),
OPharmacyName varchar(255),
PRIMARY KEY (OrderNo),
FOREIGN KEY (OPharmacyName) REFERENCES Pharmacy (PharmacyName),
FOREIGN KEY (CustomerEmail) REFERENCES Customer (EmailAddress),
FOREIGN KEY (StaffEmail) REFERENCES PharmacyStaff (EmailAddress)
);
CREATE TABLE IF NOT EXISTS CustomerHistory
(
EmailAddress varchar(255),
OrderNo int(12),
COrders int(12) NOT NULL,
PRIMARY KEY (COrders),
FOREIGN KEY (EmailAddress) REFERENCES Customer (EmailAddress),
FOREIGN KEY (OrderNo) REFERENCES Orders (OrderNo)
);







