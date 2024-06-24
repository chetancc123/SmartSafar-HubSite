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
-- Table structure for table `booking_table`
--

DROP TABLE IF EXISTS `booking_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking_table` (
  `booking_id` bigint NOT NULL AUTO_INCREMENT,
  `extra_km_charge` double NOT NULL,
  `free_kms` double NOT NULL,
  `gst` double NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `promo_code` varchar(255) DEFAULT NULL,
  `refundable_deposit` double NOT NULL,
  `rental_charge` double NOT NULL,
  `ride_order_status` enum('BOOKED','COMPLETE','IN_COMPLETE','CANCELLED','APPROVED') DEFAULT NULL,
  `total_amount` decimal(38,2) DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `drop_off_location_user_location_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `huhemp_id` bigint DEFAULT NULL,
  `pickup_location_user_location_id` bigint DEFAULT NULL,
  `time_duration_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `FKdkfwgn0ufqp5jorg7fem44uju` (`driver_id`),
  KEY `FKr41vta43fahl4qww84r4lyhrm` (`drop_off_location_user_location_id`),
  KEY `FKpckxubjhr7jbxcguh6b0gsusk` (`hub_id`),
  KEY `FKgmskv8ccreqgqu77eljnh8rd` (`huhemp_id`),
  KEY `FK3citv01jcgni9ucs5jenisy69` (`pickup_location_user_location_id`),
  KEY `FK7h1efobu3sndge6jiyewag6sa` (`time_duration_id`),
  KEY `FKiv17xibv1nx23hxq9prwfbbva` (`user_id`),
  CONSTRAINT `FK3citv01jcgni9ucs5jenisy69` FOREIGN KEY (`pickup_location_user_location_id`) REFERENCES `user_location` (`user_location_id`),
  CONSTRAINT `FK7h1efobu3sndge6jiyewag6sa` FOREIGN KEY (`time_duration_id`) REFERENCES `time_duration` (`id`),
  CONSTRAINT `FKdkfwgn0ufqp5jorg7fem44uju` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  CONSTRAINT `FKgmskv8ccreqgqu77eljnh8rd` FOREIGN KEY (`huhemp_id`) REFERENCES `hub_employee` (`hub_employee_id`),
  CONSTRAINT `FKiv17xibv1nx23hxq9prwfbbva` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKpckxubjhr7jbxcguh6b0gsusk` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKr41vta43fahl4qww84r4lyhrm` FOREIGN KEY (`drop_off_location_user_location_id`) REFERENCES `user_location` (`user_location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking_table`
--

LOCK TABLES `booking_table` WRITE;
/*!40000 ALTER TABLE `booking_table` DISABLE KEYS */;
INSERT INTO `booking_table` VALUES (1,0,0,2.88,'ca on water bottel','PROMO20',1.6,16,'BOOKED',20.48,1,652,1,NULL,653,74,1),(2,0,0,0.5,'ca on water bottel',NULL,0,0,'BOOKED',18653.95,1,703,1,NULL,702,83,1),(3,0,0,0.5,NULL,NULL,0,0,'CANCELLED',46176.54,1,705,1,NULL,704,84,1),(4,0,0,0.5,'payemtn complete ',NULL,0,0,'COMPLETE',42434.37,1,753,1,NULL,752,85,1),(5,0,0,0.5,NULL,NULL,0,0,'BOOKED',42434.37,1,803,1,NULL,802,86,1),(6,0,0,0.5,NULL,NULL,0,0,'COMPLETE',42434.37,1,853,1,NULL,852,87,1);
/*!40000 ALTER TABLE `booking_table` ENABLE KEYS */;
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
