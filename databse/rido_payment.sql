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
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `my_order_id` bigint NOT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `local_datetime` datetime(6) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `payement_id` varchar(255) DEFAULT NULL,
  `receipt` varchar(255) DEFAULT NULL,
  `booking_id` bigint DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `ebike_booking_id` bigint DEFAULT NULL,
  `rental_booking_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`my_order_id`),
  KEY `FKtgmx3e6ri3nrmwsscggsm7jp5` (`booking_id`),
  KEY `FKaao5vn31onxupg3mqndsms1ji` (`driver_id`),
  KEY `FK3ywlccbjsypsshklsj63983jc` (`ebike_booking_id`),
  KEY `FKl63yn61pd8vbly72s06csiwbm` (`rental_booking_id`),
  KEY `FK4spfnm9si9dowsatcqs5or42i` (`user_id`),
  CONSTRAINT `FK3ywlccbjsypsshklsj63983jc` FOREIGN KEY (`ebike_booking_id`) REFERENCES `ebike_booking` (`ebike_booking_id`),
  CONSTRAINT `FK4spfnm9si9dowsatcqs5or42i` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKaao5vn31onxupg3mqndsms1ji` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  CONSTRAINT `FKl63yn61pd8vbly72s06csiwbm` FOREIGN KEY (`rental_booking_id`) REFERENCES `rental_booking` (`rental_booking_id`),
  CONSTRAINT `FKtgmx3e6ri3nrmwsscggsm7jp5` FOREIGN KEY (`booking_id`) REFERENCES `booking_table` (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (103,'283500','2024-05-15 13:18:00.000000','order_OAgzk8cXVhOtiM','paid','pay_NUjUApdk3DrrdH','receipt #1',NULL,NULL,NULL,103,1),(152,'1865394','2024-05-16 13:30:00.000000','order_OB5kDk4FFWF8rA','created',NULL,'receipt #1',2,NULL,NULL,NULL,1),(153,'1865395','2024-05-16 13:32:00.000000','order_OB5lg3y8kOTgRz','created',NULL,'receipt #1',2,NULL,NULL,NULL,1),(154,'4617654','2024-05-16 15:08:00.000000','order_OB7PMbsihhphmr','created',NULL,'receipt #1',3,NULL,NULL,NULL,1),(202,'4243437','2024-05-16 15:28:00.000000','order_OB7khWVdUpmA3e','created',NULL,'receipt #1',4,NULL,NULL,NULL,1),(252,'4243437','2024-05-17 12:10:00.000000','order_OBSuu3rHKklgvR','created',NULL,'receipt #1',5,NULL,NULL,NULL,1),(302,'4243437','2024-05-20 14:33:00.000000','order_OCgwQYm9ic97IZ','created',NULL,'receipt #1',6,NULL,NULL,NULL,1),(352,'4243437','2024-05-21 15:51:00.000000','order_OD6nuqXDsClN5h','created','order_OD6nuqXDsClN5h','receipt #1',4,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
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
