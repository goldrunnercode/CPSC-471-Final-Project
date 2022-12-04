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
