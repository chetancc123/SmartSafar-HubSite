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
-- Table structure for table `courier_booking`
--

DROP TABLE IF EXISTS `courier_booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courier_booking` (
  `courier_booking_id` bigint NOT NULL AUTO_INCREMENT,
  `base_amount` decimal(38,2) DEFAULT NULL,
  `gst` double NOT NULL,
  `is_confirm` varchar(255) DEFAULT NULL,
  `price_per_km` double NOT NULL,
  `promo_code` varchar(255) DEFAULT NULL,
  `receiver_name` varchar(255) DEFAULT NULL,
  `ride_order_status` varchar(255) DEFAULT NULL,
  `sender_name` varchar(255) DEFAULT NULL,
  `total_amount` decimal(38,2) DEFAULT NULL,
  `courier_driver_id` bigint DEFAULT NULL,
  `sender_receiver_info_id` bigint DEFAULT NULL,
  `time_duration_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`courier_booking_id`),
  UNIQUE KEY `UK_ap7l2sjrqrsdsfwps7dpxmf4v` (`sender_receiver_info_id`),
  KEY `FKf4tonfk3jfao5p9mg1t52rctl` (`courier_driver_id`),
  KEY `FK8a599yvchc9i6ue235a2nxocd` (`time_duration_id`),
  KEY `FKi64mc9s3vjmwryodww5hg6wk3` (`user_id`),
  CONSTRAINT `FK8a599yvchc9i6ue235a2nxocd` FOREIGN KEY (`time_duration_id`) REFERENCES `time_duration` (`id`),
  CONSTRAINT `FKf4tonfk3jfao5p9mg1t52rctl` FOREIGN KEY (`courier_driver_id`) REFERENCES `courier` (`courier_id`),
  CONSTRAINT `FKi64mc9s3vjmwryodww5hg6wk3` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKsb3u7ph80w7ckbqor5ajjqoe` FOREIGN KEY (`sender_receiver_info_id`) REFERENCES `sender_receiver_info` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier_booking`
--

LOCK TABLES `courier_booking` WRITE;
/*!40000 ALTER TABLE `courier_booking` DISABLE KEYS */;
INSERT INTO `courier_booking` VALUES (2,3926.67,18,'CONFIRMED',30,NULL,'Rahul Kaushik','CANCELLED','Chhotu Tyagi',3926.67,52,2,89,1),(3,3926.67,18,'CONFIRMED',30,NULL,'Rahul Kaushik','APPROVED','Chhotu Tyagi',3926.67,102,3,90,1),(5,1463.20,18,'CONFIRMED',30,NULL,'Aadarsh Kaushik','COMPLETE','Gautam Tyagi',1463.20,52,5,88,102),(8,1463.20,18,'CONFIRMED',30,'PROMO10','Aadarsh Kaushik','COMPLETE','Gautam Tyagi',1316.88,254,8,91,102),(10,4637.40,18,'CONFIRMED',30,NULL,'Aadarsh Kaushik','COMPLETE','Gautam Tyagi',4637.40,254,10,92,102),(11,4637.40,18,'CONFIRMED',30,'PROMO10','Aadarsh Kaushik','COMPLETE','Gautam Tyagi',4173.66,102,11,93,102);
/*!40000 ALTER TABLE `courier_booking` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:47
