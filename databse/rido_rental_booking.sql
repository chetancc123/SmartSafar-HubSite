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
-- Table structure for table `rental_booking`
--

DROP TABLE IF EXISTS `rental_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_booking` (
  `rental_booking_id` bigint NOT NULL AUTO_INCREMENT,
  `amount` decimal(38,2) DEFAULT NULL,
  `distance` int NOT NULL,
  `gst` varchar(255) DEFAULT NULL,
  `hours` int NOT NULL,
  `promo_code` varchar(255) DEFAULT NULL,
  `rental_package_type` enum('STANDARD','PREMIUM') DEFAULT NULL,
  `ride_order_status` enum('BOOKED','COMPLETE','IN_COMPLETE','CANCELLED','APPROVED') DEFAULT NULL,
  `total_amount` decimal(38,2) DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `time_duration_id` bigint DEFAULT NULL,
  `travel_location_rental_user_location_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `vehicle_id` bigint DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `extra_amount` decimal(38,2) DEFAULT NULL,
  `extra_distance` int NOT NULL,
  `extra_hours` int NOT NULL,
  `is_confirm` enum('CONFIRMED','NOT_CONFIRMED') DEFAULT NULL,
  PRIMARY KEY (`rental_booking_id`),
  KEY `FKpvd8ynnolmb0xoqul99txc39x` (`driver_id`),
  KEY `FKf5pm24csfcplx1syigkovcnfb` (`hub_id`),
  KEY `FK9xxnfd9tiph7wo13ghvf1dnsp` (`time_duration_id`),
  KEY `FKcjabxok2f4wun8q65tx0x3xkw` (`travel_location_rental_user_location_id`),
  KEY `FKn6rwvxameum50c1q0bvak8mwm` (`user_id`),
  KEY `FKn96yythdd6ctjs26vmiql14g4` (`vehicle_id`),
  CONSTRAINT `FK9xxnfd9tiph7wo13ghvf1dnsp` FOREIGN KEY (`time_duration_id`) REFERENCES `time_duration` (`id`),
  CONSTRAINT `FKcjabxok2f4wun8q65tx0x3xkw` FOREIGN KEY (`travel_location_rental_user_location_id`) REFERENCES `rental_user_location` (`rental_user_location_id`),
  CONSTRAINT `FKf5pm24csfcplx1syigkovcnfb` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKn6rwvxameum50c1q0bvak8mwm` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKn96yythdd6ctjs26vmiql14g4` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicle` (`vehicle_id`),
  CONSTRAINT `FKpvd8ynnolmb0xoqul99txc39x` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_booking`
--

LOCK TABLES `rental_booking` WRITE;
/*!40000 ALTER TABLE `rental_booking` DISABLE KEYS */;
INSERT INTO `rental_booking` VALUES (1,2362.50,50,'5%',5,NULL,'STANDARD','COMPLETE',2362.50,202,1,78,202,1,52,NULL,NULL,0,0,NULL),(2,2362.50,50,'5%',5,NULL,'STANDARD','BOOKED',2362.50,1,1,79,252,1,52,NULL,NULL,0,0,NULL),(103,2835.00,60,'5%',6,NULL,'STANDARD','BOOKED',2835.00,NULL,1,82,353,1,52,NULL,NULL,0,0,NULL);
/*!40000 ALTER TABLE `rental_booking` ENABLE KEYS */;
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
