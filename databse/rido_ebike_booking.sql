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
-- Table structure for table `ebike_booking`
--

DROP TABLE IF EXISTS `ebike_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ebike_booking` (
  `ebike_booking_id` bigint NOT NULL AUTO_INCREMENT,
  `aadhar_card` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `driving_licence` varchar(255) DEFAULT NULL,
  `km_image` varchar(255) DEFAULT NULL,
  `rental_type` enum('HOURLY','DAILY') DEFAULT NULL,
  `total_amount` decimal(38,2) DEFAULT NULL,
  `user_image` varchar(255) DEFAULT NULL,
  `vehicle_front_view_image` varchar(255) DEFAULT NULL,
  `vehicle_side_view_image` varchar(255) DEFAULT NULL,
  `ebike_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `time_duration_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`ebike_booking_id`),
  KEY `FKanpekql43nrafg868aa3i1f65` (`ebike_id`),
  KEY `FK7r857wbvvca4l72691no8j4js` (`hub_id`),
  KEY `FKji134su4dn1ho3bei4djqt2cv` (`time_duration_id`),
  KEY `FK2an6vpnuqt5r720sdlpupfflc` (`user_id`),
  CONSTRAINT `FK2an6vpnuqt5r720sdlpupfflc` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK7r857wbvvca4l72691no8j4js` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKanpekql43nrafg868aa3i1f65` FOREIGN KEY (`ebike_id`) REFERENCES `ebike` (`e_bike_id`),
  CONSTRAINT `FKji134su4dn1ho3bei4djqt2cv` FOREIGN KEY (`time_duration_id`) REFERENCES `time_duration` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ebike_booking`
--

LOCK TABLES `ebike_booking` WRITE;
/*!40000 ALTER TABLE `ebike_booking` DISABLE KEYS */;
/*!40000 ALTER TABLE `ebike_booking` ENABLE KEYS */;
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
