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
-- Table structure for table `driver_payment_detail`
--

DROP TABLE IF EXISTS `driver_payment_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_payment_detail` (
  `driver_payment_detail_id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `driver_name` varchar(255) DEFAULT NULL,
  `email_address` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `profile_img_link` varchar(255) DEFAULT NULL,
  `status` enum('PAID','PENDING') DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `time_duration_id` bigint DEFAULT NULL,
  PRIMARY KEY (`driver_payment_detail_id`),
  KEY `FKt96g0n16uqio3k9h7wftvf12q` (`driver_id`),
  KEY `FKgyumrmiput8siyi7h4haksvwp` (`hub_id`),
  KEY `FKrd2xyy3raegxbk35hdc3efcrs` (`time_duration_id`),
  CONSTRAINT `FKgyumrmiput8siyi7h4haksvwp` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKrd2xyy3raegxbk35hdc3efcrs` FOREIGN KEY (`time_duration_id`) REFERENCES `time_duration` (`id`),
  CONSTRAINT `FKt96g0n16uqio3k9h7wftvf12q` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_payment_detail`
--

LOCK TABLES `driver_payment_detail` WRITE;
/*!40000 ALTER TABLE `driver_payment_detail` DISABLE KEYS */;
INSERT INTO `driver_payment_detail` VALUES (2,NULL,'200','2024-04-04','mani',NULL,NULL,NULL,'PAID',1,1,NULL),(3,NULL,'500','2024-04-04','mani',NULL,NULL,NULL,'PENDING',1,1,NULL),(4,NULL,'750','2024-04-04',NULL,NULL,NULL,NULL,'PENDING',1,1,NULL),(5,NULL,'11','2024-05-01',NULL,NULL,NULL,NULL,'PENDING',1,1,NULL),(6,NULL,'25','2024-05-03',NULL,NULL,NULL,NULL,'PENDING',1,1,NULL),(7,NULL,'1000','2024-05-03',NULL,NULL,NULL,NULL,'PENDING',2,1,NULL),(8,NULL,'100','2024-05-03',NULL,NULL,NULL,NULL,'PENDING',2,1,NULL);
/*!40000 ALTER TABLE `driver_payment_detail` ENABLE KEYS */;
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
