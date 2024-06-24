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
-- Table structure for table `driver_payment`
--

DROP TABLE IF EXISTS `driver_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `driver_payment` (
  `driver_order_id` bigint NOT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `local_datetime` datetime(6) DEFAULT NULL,
  `order_id` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `payement_id` varchar(255) DEFAULT NULL,
  `receipt` varchar(255) DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `payment_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`driver_order_id`),
  KEY `FK6345dyo2eps9w24k720h75q8w` (`driver_id`),
  KEY `FKfkxme756skq813yr9tw9uf1jg` (`hub_id`),
  CONSTRAINT `FK6345dyo2eps9w24k720h75q8w` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`),
  CONSTRAINT `FKfkxme756skq813yr9tw9uf1jg` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `driver_payment`
--

LOCK TABLES `driver_payment` WRITE;
/*!40000 ALTER TABLE `driver_payment` DISABLE KEYS */;
INSERT INTO `driver_payment` VALUES (1,'38000','2024-03-18 15:06:00.000000','order_NnlrUYuxfwmKPZ','created',NULL,'receipt #1',1,2,NULL),(2,'43000','2024-03-19 13:05:00.000000','order_No8KerXfvfpceq','created',NULL,'receipt #1',2,1,NULL),(452,'2200','2024-04-01 15:44:49.380113','order_NtJzJVjRpfyzRt','paid',NULL,'receipt#1',1,1,NULL),(502,'20000','2024-05-17 13:22:39.389222','order_NuTAUWG34DjwfL','paid',NULL,'receipt#1',1,1,NULL),(552,'10000','2024-05-28 11:27:00.000000','order_OFo36AsEsHrwwG','created',NULL,'receipt #1',2,1,NULL),(553,'10000','2024-05-28 11:28:00.000000','order_OFo4Hiqur7xe6t','created',NULL,'receipt #1',2,1,NULL),(554,'50000','2024-05-28 11:29:00.000000','order_OFo5AfIfYTc7zn','created',NULL,'receipt #1',1,1,NULL),(555,'10000','2024-05-28 11:31:00.000000','order_OFo7qPWX2XviuR','paid',NULL,'receipt #1',2,1,'pay_OFo7xO9gSFNwEy'),(556,'50000','2024-05-28 11:32:00.000000','order_OFo8GPSKfcr6Zo','paid',NULL,'receipt #1',1,1,'pay_OFo8Miylu5ErdH'),(557,'50000','2024-05-28 11:33:00.000000','order_OFo9YHZ62pIvcs','created',NULL,'receipt #1',1,1,NULL),(558,'2500','2024-05-28 12:13:00.000000','order_OFoqT5VKxwLQGn','created',NULL,'receipt #1',1,1,NULL),(602,'2500','2024-05-28 14:23:00.000000','order_OFr3PxhiyHlp1U','paid',NULL,'receipt #1',1,1,'pay_OFr3XQiOrmHFvl'),(652,'50000','2024-05-28 17:44:00.000000','order_OFuT9jSxwYIo6B','created',NULL,'receipt #1',1,1,NULL),(653,'50000','2024-05-28 17:44:00.000000','order_OFuT9unNXHddfc','created',NULL,'receipt #1',1,1,NULL),(702,'50000','2024-05-28 20:41:00.000000','order_OFxUmBIgLi7xid','created',NULL,'receipt #1',1,1,NULL);
/*!40000 ALTER TABLE `driver_payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-13 12:08:48
