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
-- Table structure for table `hub_employee_payment_details`
--

DROP TABLE IF EXISTS `hub_employee_payment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hub_employee_payment_details` (
  `employee_order_id` bigint NOT NULL,
  `all_payment_status` enum('PAID','PENDING','ORDER_CREATED') DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `hub_employee_id` bigint DEFAULT NULL,
  PRIMARY KEY (`employee_order_id`),
  KEY `FKcdkgoaxbmd3bs71owcqlwe19x` (`hub_id`),
  KEY `FKc3j3xx7pvnxfax5qsyuiwtxg5` (`hub_employee_id`),
  CONSTRAINT `FKc3j3xx7pvnxfax5qsyuiwtxg5` FOREIGN KEY (`hub_employee_id`) REFERENCES `hub_employee` (`hub_employee_id`),
  CONSTRAINT `FKcdkgoaxbmd3bs71owcqlwe19x` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hub_employee_payment_details`
--

LOCK TABLES `hub_employee_payment_details` WRITE;
/*!40000 ALTER TABLE `hub_employee_payment_details` DISABLE KEYS */;
INSERT INTO `hub_employee_payment_details` VALUES (1,'PENDING','150','2024-05-16',1,1),(2,'PENDING','657','2024-05-16',1,1),(52,'PENDING','987','2024-05-16',1,1);
/*!40000 ALTER TABLE `hub_employee_payment_details` ENABLE KEYS */;
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
