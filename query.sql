CREATE DATABASE IF NOT EXISTS fullStore;

USE fullStore;

CREATE TABLE IF NOT EXISTS Orders
(
OrderNo int(12) NOT NULL,
MedName varchar(255),
PickupLocation varchar(255),
EstArrival varchar(255),
Quantity int(6),
Status varchar(255),
CustomerEmail varchar(255),
StaffEmail varchar(255),
CompanyName varchar(255),
OPharmacyName varchar(255),
PRIMARY KEY (OrderNo)
-- FOREIGN KEY (OPharmacyName) REFERENCES Pharmacy (PharmacyName),
-- FOREIGN KEY (CustomerEmail) REFERENCES Customer (EmailAddress),
-- FOREIGN KEY (StaffEmail) REFERENCES PharmacyStaff (EmailAddress)
);

DROP TABLE IF EXISTS Pharmacy;
CREATE TABLE IF NOT EXISTS Pharmacy(
	PharmacyName varchar(255) NOT NULL,
	Address varchar(255),
	PRIMARY KEY (PharmacyName),
	CurrentOrders int(12) REFERENCES Orders (OrderNo)
);

SELECT * FROM Pharmacy;
