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
-- Table structure for table `car_repair`
--

DROP TABLE IF EXISTS `car_repair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_repair` (
  `car_repair_id` bigint NOT NULL,
  `vehicle_name` varchar(255) DEFAULT NULL,
  `vehicle_no` varchar(255) DEFAULT NULL,
  `approximate_amount` decimal(38,2) DEFAULT NULL,
  `damage_car_img` varchar(500) DEFAULT NULL,
  `maintenance_approval_status` enum('ACCEPTED','REJECTED') DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `return_time` datetime(6) DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `damage_car_video` varchar(255) DEFAULT NULL,
  `hub_message` varchar(255) DEFAULT NULL,
  `car_repair_status` enum('REJECT','APPROVE','PENDING','PROCESSING','READY_FOR_RIDE','AVAILABLE') DEFAULT NULL,
  `car_repair_unique_key` varchar(255) DEFAULT NULL,
  `vehicle_id` bigint DEFAULT NULL,
  PRIMARY KEY (`car_repair_id`),
  KEY `FK8np9ivuhawxa9b9b9k1pgom5t` (`driver_id`),
  KEY `FK2xmkchgdpwavpa2n5qloxnido` (`hub_id`),
  KEY `FKsgfob9g97psf48hwndv0pmivp` (`vehicle_id`),
  CONSTRAINT `FK2xmkchgdpwavpa2n5qloxnido` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FK8np9ivuhawxa9b9b9k1pgom5t` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  CONSTRAINT `FKsgfob9g97psf48hwndv0pmivp` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`vehicle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_repair`
--

LOCK TABLES `car_repair` WRITE;
/*!40000 ALTER TABLE `car_repair` DISABLE KEYS */;
INSERT INTO `car_repair` VALUES (402,'Devid Putra','cgd3543554',NULL,'https://empoms.s3.amazonaws.com/769914b6-e626-4cca-870a-40bc1ccb352d_Screenshot 2024-03-06 120954 - Copy.png,https://empoms.s3.amazonaws.com/0112545c-cbbe-4027-80e5-a04b9f28d9cc_Screenshot 2024-03-06 120954.png','ACCEPTED','nice','2024-06-12 18:03:03.650657',202,1,'https://empoms.s3.amazonaws.com/233806c1-bb45-44af-86d0-a55c04c62c75_2308576-hd_1920_1080_30fps.mp4','accident','READY_FOR_RIDE','SER57',569),(403,'swift','cg8764153',NULL,'https://empoms.s3.amazonaws.com/9d263c15-9fd0-4b22-9e2d-649cd4dccf44_Screenshot 2024-03-06 121034 - Copy.png,https://empoms.s3.amazonaws.com/1d9edbc4-63c5-4732-95f9-5546b5725da8_Screenshot 2024-03-06 121034.png',NULL,'nice','2024-06-12 18:03:23.431224',252,1,'https://empoms.s3.amazonaws.com/4488dbe0-c5c2-47ae-ad3e-4bb803dfc7eb_2308576-hd_1920_1080_30fps.mp4','accident','PROCESSING','SER95',802);
/*!40000 ALTER TABLE `car_repair` ENABLE KEYS */;
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
