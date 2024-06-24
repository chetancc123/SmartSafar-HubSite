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
-- Table structure for table `courier_orders`
--

DROP TABLE IF EXISTS `courier_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courier_orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date_created` datetime(6) DEFAULT NULL,
  `last_updated` datetime(6) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `order_tracking_number` varchar(255) DEFAULT NULL,
  `total_price` decimal(38,2) DEFAULT NULL,
  `courier_booking_courier_booking_id` bigint DEFAULT NULL,
  `payment_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_bbslxhxxq9ppxjf22pqtlgn3o` (`courier_booking_courier_booking_id`),
  UNIQUE KEY `UK_ojfprie8g0ifuxlunml10ki0r` (`payment_id`),
  CONSTRAINT `FKj03t3gxypf32y84qrenylixt2` FOREIGN KEY (`courier_booking_courier_booking_id`) REFERENCES `courier_booking` (`courier_booking_id`),
  CONSTRAINT `FKslpmgum4nk3qj27tntg1kep6` FOREIGN KEY (`payment_id`) REFERENCES `user_courier_payments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier_orders`
--

LOCK TABLES `courier_orders` WRITE;
/*!40000 ALTER TABLE `courier_orders` DISABLE KEYS */;
INSERT INTO `courier_orders` VALUES (2,'2024-05-15 13:05:03.521771','2024-05-15 13:05:44.409257','order_OAglqo7sPEjgIo','CONFIRMED','7e4bd1a2-f770-4881-be48-06f685e8dad4',3926.67,2,2),(3,'2024-05-15 13:06:52.939189','2024-05-15 13:07:20.661081','order_OAgnmHOvuoQGLW','CONFIRMED','a3ad55fe-0dec-47be-846a-04a48b0e766b',3926.67,3,3),(4,'2024-05-22 11:10:33.037804','2024-05-22 11:11:26.397216','order_ODQYiwGRyFIdLr','CONFIRMED','0a6a7b55-0036-4ce6-a4c7-a2465eeab24b',1463.20,5,4),(7,'2024-05-27 17:56:33.009060','2024-05-27 17:56:33.009060','order_OFW9GxGRvgqOLB','IN_PROGRESS','1f2da094-b4b8-4734-b1b3-7bd0214e2e8c',1463.20,8,NULL),(14,'2024-05-27 18:17:04.592419','2024-05-27 18:17:04.592419','order_OFWUxIExeGLWAN','IN_PROGRESS','cad2ef51-a631-4933-a1c8-b6df8af10c1d',4637.40,10,NULL),(15,'2024-05-27 18:19:21.281808','2024-05-27 18:19:21.281808','order_OFWXMV1bt1VHIs','IN_PROGRESS','08137aa3-8c9d-49e8-a66e-0b4f331a3229',4173.66,11,NULL);
/*!40000 ALTER TABLE `courier_orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:46
