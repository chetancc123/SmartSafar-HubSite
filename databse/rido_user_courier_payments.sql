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
-- Table structure for table `user_courier_payments`
--

DROP TABLE IF EXISTS `user_courier_payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_courier_payments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` decimal(38,2) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `local_date_time` datetime(6) DEFAULT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `courier_order_id` bigint DEFAULT NULL,
  `user_user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_b4ck9d70x9lmfq1yrakve4lx0` (`courier_order_id`),
  KEY `FK4altm98mvnhw3rr5s6o591e5x` (`user_user_id`),
  CONSTRAINT `FK4altm98mvnhw3rr5s6o591e5x` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKsxdiopw1wd9cils033r88q932` FOREIGN KEY (`courier_order_id`) REFERENCES `courier_orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_courier_payments`
--

LOCK TABLES `user_courier_payments` WRITE;
/*!40000 ALTER TABLE `user_courier_payments` DISABLE KEYS */;
INSERT INTO `user_courier_payments` VALUES (2,3926.67,NULL,'2024-05-15 13:05:44.404256','pay_O0Qd35Nd3gMUt9','SUCCESSFUL',2,1),(3,3926.67,NULL,'2024-05-15 13:07:20.658079','pay_O0Qd35Nd3gMUt9','SUCCESSFUL',3,1),(4,1463.20,NULL,'2024-05-22 11:11:26.386727','pay_O0Qd35Nd3gMUt9','SUCCESSFUL',4,102);
/*!40000 ALTER TABLE `user_courier_payments` ENABLE KEYS */;
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
