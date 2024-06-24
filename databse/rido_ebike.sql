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
-- Table structure for table `ebike`
--

DROP TABLE IF EXISTS `ebike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ebike` (
  `e_bike_id` bigint NOT NULL AUTO_INCREMENT,
  `battery` varchar(255) DEFAULT NULL,
  `bike_range` double NOT NULL,
  `charging_time` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `deposit_amount` decimal(38,2) DEFAULT NULL,
  `e_bike_img` varchar(255) DEFAULT NULL,
  `e_bike_name` varchar(255) DEFAULT NULL,
  `e_bike_no` varchar(255) DEFAULT NULL,
  `price_per_days` decimal(38,2) DEFAULT NULL,
  `price_per_hours` decimal(38,2) DEFAULT NULL,
  `price_per_km` decimal(38,2) DEFAULT NULL,
  `range_per_charge` varchar(255) DEFAULT NULL,
  `top_speed` varchar(255) DEFAULT NULL,
  `usage_type` enum('RENTAL','DRIVER') DEFAULT NULL,
  `vehicle_status` enum('AVAILABLE','ENGAGED','MAINTENANCE') DEFAULT NULL,
  `weight` varchar(255) DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  PRIMARY KEY (`e_bike_id`),
  KEY `FKdawqyxe09e6b45tnep78971pk` (`hub_id`),
  CONSTRAINT `FKdawqyxe09e6b45tnep78971pk` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ebike`
--

LOCK TABLES `ebike` WRITE;
/*!40000 ALTER TABLE `ebike` DISABLE KEYS */;
/*!40000 ALTER TABLE `ebike` ENABLE KEYS */;
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
