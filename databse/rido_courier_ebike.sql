-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: rido
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `courier_ebike`
--

DROP TABLE IF EXISTS `courier_ebike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courier_ebike` (
  `courier_ebike_id` bigint NOT NULL AUTO_INCREMENT,
  `battery` varchar(255) DEFAULT NULL,
  `charging_time` varchar(255) DEFAULT NULL,
  `ebike_image` varchar(255) DEFAULT NULL,
  `insurance_no` varchar(255) DEFAULT NULL,
  `rc` varchar(255) DEFAULT NULL,
  `top_speed` double NOT NULL,
  `vehicle_name` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `vehicle_status` enum('AVAILABLE','ENGAGED','MAINTENANCE') DEFAULT NULL,
  `weight` double NOT NULL,
  `hub_id` bigint DEFAULT NULL,
  `price_per_km` decimal(38,2) DEFAULT NULL,
  `courier_courier_id` bigint DEFAULT NULL,
  `admin_id` bigint DEFAULT NULL,
  `assign_hub_date` datetime(6) DEFAULT NULL,
  `chassis_no` varchar(255) NOT NULL,
  `date_of_purchase` datetime(6) DEFAULT NULL,
  `ebikerange` varchar(255) DEFAULT NULL,
  `invoice` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`courier_ebike_id`),
  KEY `FKm6b9kqv9blti1hh4kj8bqt9yr` (`hub_id`),
  KEY `FKobfbqxehsa2qllxixkh70pom1` (`courier_courier_id`),
  KEY `FKg8t9k7d72e1bulj7wvi57mvuf` (`admin_id`),
  CONSTRAINT `FKg8t9k7d72e1bulj7wvi57mvuf` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`),
  CONSTRAINT `FKm6b9kqv9blti1hh4kj8bqt9yr` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKobfbqxehsa2qllxixkh70pom1` FOREIGN KEY (`courier_courier_id`) REFERENCES `courier` (`courier_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier_ebike`
--

LOCK TABLES `courier_ebike` WRITE;
/*!40000 ALTER TABLE `courier_ebike` DISABLE KEYS */;
INSERT INTO `courier_ebike` VALUES (1,'Lithium-ion','23 hours','https://empoms.s3.amazonaws.com/Car.jpg','123496789','12EF23',30,'Ola S1','EB1239','ENGAGED',15.5,52,100.00,152,1,NULL,'',NULL,NULL,NULL),(2,'Lithium-ion','8 hours','https://empoms.s3.amazonaws.com/Car.jpg','123496789','4HG23',40,'Ola S1 Pro','CG1239','ENGAGED',18.2,52,10.00,NULL,1,NULL,'',NULL,NULL,NULL),(3,'Lithium-ion','8 hours','https://empoms.s3.amazonaws.com/dafe3a38-a798-4f7e-886b-a4feac1eb5d6_PXL_20231025_132456393.jpg','123496789','4HG23',40,'Ola S1 Pro','CG1239','AVAILABLE',18.2,1,10.00,254,1,NULL,'',NULL,NULL,NULL),(4,'lithium','4','https://empoms.s3.amazonaws.com/c2ede80e-6eda-4574-a0c7-1db763768e63_Login 2.jpg','34567','3245678',65,'ola','cg4325','AVAILABLE',54,1,NULL,NULL,1,'2024-06-03 15:05:00.051563','',NULL,NULL,NULL),(5,'lithium','4','https://empoms.s3.amazonaws.com/d7d586f5-790a-48c3-a5f8-bf29b4be5acf_Login 2.jpg','34568','3245679',65,'ola','cg4326','AVAILABLE',54,2,NULL,NULL,1,'2024-06-04 16:12:22.874358','',NULL,NULL,NULL),(6,'3','5','https://empoms.s3.amazonaws.com/6d7e0202-435b-4a27-a391-9f78bab507b0_Login 2.jpg','345633','43454',34,'ola','cg3546','AVAILABLE',34,NULL,NULL,NULL,1,NULL,'',NULL,NULL,NULL),(7,'55','525','https://empoms.s3.amazonaws.com/3f282c6d-bcd9-4707-b676-584af530afb4_WhatsApp Image 2024-05-01 at 13.21.21_ea55c9f7.jpg','7855862','147963563',80,'fbgy','cg045255','AVAILABLE',20,NULL,NULL,NULL,1,NULL,'',NULL,NULL,NULL),(8,'55','525','https://empoms.s3.amazonaws.com/0e6a103b-18e1-43a1-a87d-a56400d84b11_WhatsApp Image 2024-05-01 at 13.21.21_ea55c9f7.jpg','7855862','147963563',80,'fbgy','cg045255','AVAILABLE',20,NULL,NULL,NULL,1,NULL,'',NULL,NULL,NULL),(9,NULL,NULL,'https://empoms.s3.amazonaws.com/b0fcc1e5-e0cc-442c-b837-048cd3822ea3_Screenshot 2024-03-06 120954 - Copy.png,https://empoms.s3.amazonaws.com/a98ee972-4bbd-43de-949a-03b48f5e18c2_Screenshot 2024-03-06 120954.png','INS123456','RC123456789',45,'E-Bike Model X','EBK1234','AVAILABLE',25.5,NULL,0.50,NULL,1,NULL,'CHS123456789','2023-05-15 05:30:00.000000','100 km','https://empoms.s3.amazonaws.com/c76dee67-ea88-42ef-9899-7c6f6ddb9aa2_Screenshot 2024-03-06 121209.png'),(10,NULL,NULL,'https://empoms.s3.amazonaws.com/abccc4fd-b60b-470c-aafe-cb46529ea110_Screenshot 2024-03-06 120954 - Copy.png,https://empoms.s3.amazonaws.com/6756f03a-0391-4230-b9ee-f1d0a2953799_Screenshot 2024-03-06 120954.png','INS123456','RC123456789',45,'E-Bike Model X','EBK1234','AVAILABLE',25.5,NULL,0.50,NULL,1,NULL,'CHS123456789','2023-05-15 05:30:00.000000','100 km','https://empoms.s3.amazonaws.com/b185fa1b-c5e1-47ff-851b-e7d88ccae40f_Screenshot 2024-03-06 121209.png'),(11,NULL,NULL,'https://empoms.s3.amazonaws.com/f8d05f32-12da-4d29-a820-0b4975867c02_Screenshot 2024-03-06 121209.png','324344','2342433',342,'ola','f3423423','AVAILABLE',34,NULL,43.00,NULL,1,NULL,'65464','2023-05-15 05:30:00.000000','3443','https://empoms.s3.amazonaws.com/691bc150-552d-4fe5-b956-28ee86d0ce0d_Screenshot 2024-03-06 121209 - Copy.png'),(12,NULL,NULL,'https://empoms.s3.amazonaws.com/78a3f5de-f9cb-40d0-9b1b-15cbeb5eaa1f_Screenshot 2024-03-06 121209 - Copy.png','324324343','23432424',234,'ola1','fr3434434','AVAILABLE',4343,NULL,34.00,NULL,1,NULL,'323235433','2023-05-29 05:30:00.000000','343434','https://empoms.s3.amazonaws.com/307b335c-0aa0-4a6f-a88d-6fa7394925c4_Screenshot 2024-03-06 121034.png'),(13,NULL,NULL,'https://empoms.s3.amazonaws.com/e8e49efc-f5d0-46a3-9567-4d7961c2653c_Screenshot 2024-03-06 121209.png','54345345','432434322',45,'ola','234f32d','AVAILABLE',344,NULL,45.00,NULL,1,NULL,'564326523','2024-05-28 05:30:00.000000','243','https://empoms.s3.amazonaws.com/c3f560f3-3c88-4a4b-8d27-0b47bacdad37_Screenshot 2024-03-06 121209 - Copy.png'),(14,NULL,NULL,'https://empoms.s3.amazonaws.com/86418476-5125-40ef-b487-d720f9eb6131_Screenshot 2024-03-06 121209.png','34344','32423423',323,'ola','df34344','AVAILABLE',34,NULL,53.00,NULL,1,NULL,'433243','2024-05-26 05:30:00.000000','233','https://empoms.s3.amazonaws.com/0fa55719-639a-44e4-9654-52521a00fcab_Screenshot 2024-02-15 120647.png'),(15,NULL,NULL,'https://empoms.s3.amazonaws.com/19fceb22-c0dc-467e-9fda-94c4726b6d1d_Screenshot 2024-03-06 121034.png,https://empoms.s3.amazonaws.com/cdd0c376-05b2-429b-83d4-e9d48c756042_Screenshot 2024-03-06 121209 - Copy.png','5555454','23442432',45,'ola','df3r3r34','AVAILABLE',454,NULL,45.00,NULL,1,NULL,'64614331','2024-06-01 05:30:00.000000','455','https://empoms.s3.amazonaws.com/d499de53-dd85-4e6b-8458-8cc1521fe0c4_Screenshot 2024-02-15 120647.png'),(16,NULL,NULL,'https://empoms.s3.amazonaws.com/f9bf137c-a491-4da6-bbfa-c4015107b366_Screenshot 2024-03-06 121034 - Copy.png,https://empoms.s3.amazonaws.com/3c436110-61f9-4d03-8864-645bf77258c7_Screenshot 2024-03-06 121034.png','32324234','34534543',343,'hero transport','fd34545','AVAILABLE',324,NULL,3.00,NULL,1,NULL,'3445345345','2024-05-10 05:30:00.000000','343','https://empoms.s3.amazonaws.com/faa49648-9848-45e4-b4ef-673713167b88_Screenshot 2024-02-15 120647.png'),(17,NULL,NULL,'https://empoms.s3.amazonaws.com/fef03bee-d73f-4e58-bddb-13377165eb7d_Screenshot 2024-03-06 121034 - Copy.png,https://empoms.s3.amazonaws.com/79e94d25-8ae6-478e-ad13-dc73a2d7b737_Screenshot 2024-03-06 121034.png','45645654','3242343243',34,'ola','fd324234','AVAILABLE',444,NULL,44.00,NULL,1,NULL,'324323','2024-05-26 05:30:00.000000','444','https://empoms.s3.amazonaws.com/74d51e6e-1749-4b64-b316-82403ada99ea_Screenshot 2024-03-06 120954 - Copy.png');
/*!40000 ALTER TABLE `courier_ebike` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:44
