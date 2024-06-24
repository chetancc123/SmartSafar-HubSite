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
-- Table structure for table `courierdocument`
--

DROP TABLE IF EXISTS `courierdocument`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courierdocument` (
  `courierdocument_id` bigint NOT NULL,
  `ifsccode` varchar(255) DEFAULT NULL,
  `aadhaar_no` varchar(255) DEFAULT NULL,
  `account_holder_name` varchar(255) DEFAULT NULL,
  `account_no` varchar(255) DEFAULT NULL,
  `branch_name` varchar(255) DEFAULT NULL,
  `courier_driver_image` varchar(255) DEFAULT NULL,
  `insurance` varchar(255) DEFAULT NULL,
  `licence` varchar(255) DEFAULT NULL,
  `pan_card_no` varchar(255) DEFAULT NULL,
  `passbook` varchar(255) DEFAULT NULL,
  `register_certificate` varchar(255) DEFAULT NULL,
  `vehicle_image` varchar(255) DEFAULT NULL,
  `courier_id` bigint DEFAULT NULL,
  PRIMARY KEY (`courierdocument_id`),
  UNIQUE KEY `UK_q993ste3jjm6lhbeutdkj2720` (`courier_id`),
  CONSTRAINT `FKpxjla1vg6kvlfjc8x1sewstcb` FOREIGN KEY (`courier_id`) REFERENCES `courier` (`courier_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courierdocument`
--

LOCK TABLES `courierdocument` WRITE;
/*!40000 ALTER TABLE `courierdocument` DISABLE KEYS */;
INSERT INTO `courierdocument` VALUES (1,'75','25633598','jallu','26359348','cfghhgf','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','4354453','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg',52),(2,'75','25633598','aadarsh','26359348','drtyutfh','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','4354453','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg',102),(3,'333','5467886','Alia','546787654','dfgh','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','4354453','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg',152),(4,'543','5344354','Abhil','57654534','dfgfhg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','5765643','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg','https://empoms.s3.amazonaws.com/Car.jpg',202),(52,'56937895','25633598','sub','26359348',NULL,'https://empoms.s3.amazonaws.com/9af39933-f96e-4c86-98f5-cd17a3fa4fe1_Screenshot 2023-11-06 170707.png',NULL,NULL,NULL,NULL,NULL,NULL,254),(102,'ABCD123456','1234 5678 9012','John Doe','1234567890','XYZ Branch','https://empoms.s3.amazonaws.com/b929861c-042a-4258-a0e5-72bf36d15061_Screenshot 2023-11-06 170707.png',NULL,'https://empoms.s3.amazonaws.com/97f43211-c752-4720-a4b3-f04a0a04c0fd_Screenshot 2023-11-06 170707.png',NULL,'https://empoms.s3.amazonaws.com/8ec3a252-3f6c-4dcd-8028-eb4ab0ef9fc5_Screenshot 2023-11-06 170707.png',NULL,NULL,253),(152,'56937895','25633598','sub','26359348',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,302);
/*!40000 ALTER TABLE `courierdocument` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:43
