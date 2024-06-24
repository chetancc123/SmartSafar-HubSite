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
-- Table structure for table `courier`
--

DROP TABLE IF EXISTS `courier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courier` (
  `courier_id` bigint NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `approve_status` enum('PENDING','APPROVED','REJECTED') DEFAULT NULL,
  `courier_driver_latitude` double NOT NULL,
  `courier_driver_longitude` double NOT NULL,
  `distance_from_sender` double NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `owner_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  `price_per_km` double NOT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `vehicle_status` enum('AVAILABLE','ENGAGED','MAINTENANCE') DEFAULT NULL,
  `vehicle_type` enum('TWO_WHEELER','FOUR_WHEELER') DEFAULT NULL,
  `weight` double NOT NULL,
  `hub_id` bigint DEFAULT NULL,
  `vehicle_category` enum('ACE','GOLD','LOAD','E_BIKE') DEFAULT NULL,
  `vehicle_assign_status` enum('CHECKIN','CHECKOUT') DEFAULT NULL,
  `courierdocument_id` bigint DEFAULT NULL,
  `status` enum('AVAILABLE','ONGOING','IN_COMPLETED') DEFAULT NULL,
  PRIMARY KEY (`courier_id`),
  UNIQUE KEY `UK_6ogghg7dc3se2gyc9i77rrsf2` (`courierdocument_id`),
  KEY `FK5ua4fi9hs23qu8rnd1lqsw4pn` (`hub_id`),
  CONSTRAINT `FK5ua4fi9hs23qu8rnd1lqsw4pn` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKeq50xgdm6jmi6nlu8j0q1p737` FOREIGN KEY (`courierdocument_id`) REFERENCES `courierdocument` (`courierdocument_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier`
--

LOCK TABLES `courier` WRITE;
/*!40000 ALTER TABLE `courier` DISABLE KEYS */;
INSERT INTO `courier` VALUES (52,'Raipur','APPROVED',25.2620455,81.5366707,0,'jaleshwari2@gmail.com','jaleshwari2','$2a$10$fB3y1fmY1azx.Py3Hexup.YU4ZdNi.dY7t6cDvVCrMgVb7uBN1khe','587586585459',NULL,30,'CG23456','AVAILABLE','FOUR_WHEELER',50,1,'ACE',NULL,1,NULL),(102,'Bhilai','APPROVED',26.2620455,81.5366707,0,'aadarsh@gmail.com','aadarsh','$2a$10$y7RDlC.ICFBo3l9Fn9rQyufKeLiG5GB8pFeEWdEyK3qEAAuFIMD8W','5678765456754',NULL,50,'CG23467','AVAILABLE','TWO_WHEELER',100,1,'GOLD',NULL,2,NULL),(152,'Korba','PENDING',21.2620455,81.5366707,0,'Alia@gmail.com','Alia','$2a$10$SwJYdjonk0x7E5nFxEEanecyz4BaI6WZfvq.bpyn5z89b49PMzjCu','56787665456754',NULL,10,'','AVAILABLE','TWO_WHEELER',20,1,'E_BIKE','CHECKIN',3,NULL),(202,'Durg','APPROVED',21.2620455,81.5366707,0,'Abhil@gmail.com','Abhil','$2a$10$zII18fW20uLtK/WDGmJ/xePLCPt57GfKAc6hrY9iL9Dr/SNP7V6Za','567876654756754',NULL,13,'CG4567','AVAILABLE','TWO_WHEELER',15,52,'GOLD',NULL,4,NULL),(253,NULL,'PENDING',0,0,0,'Alia@gmail.com','Alia','$2a$10$ziCSEIWjbpYyEBH.6ZMU4e1sLFDmQ5vGyIc.zn5xSmFgASIMUikU.','56787665456754',NULL,0,NULL,NULL,'TWO_WHEELER',0,1,NULL,NULL,102,NULL),(254,NULL,'APPROVED',21.2620455,81.5366707,0,'ail@gmail.com','jaleshwari','$2a$10$MHOg22FHk0Sb5LmpFbMzKed2kWM9Keyy4c.bRHqOH2TupCjroFMQy','+919927335197',NULL,0,'2376','AVAILABLE','TWO_WHEELER',75,1,'E_BIKE','CHECKOUT',52,NULL),(302,NULL,'PENDING',0,0,0,'Anilkumar@gmail.com','Anil kumar','$2a$10$cNoz3CGI.T3Bza3anRXTjebsocqk61zQINJ9DvwmiVQ8iucB6f6qe','+929867467477',NULL,0,'2376',NULL,'FOUR_WHEELER',75,1,NULL,NULL,152,NULL);
/*!40000 ALTER TABLE `courier` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:45
