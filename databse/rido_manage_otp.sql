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
-- Table structure for table `manage_otp`
--

DROP TABLE IF EXISTS `manage_otp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manage_otp` (
  `manage_otp_id` bigint NOT NULL,
  `forget_otp` varchar(255) DEFAULT NULL,
  `register_otp` varchar(255) DEFAULT NULL,
  `update_otp` varchar(255) DEFAULT NULL,
  `admin_id` bigint DEFAULT NULL,
  `courier_id` bigint DEFAULT NULL,
  `driver_id` bigint DEFAULT NULL,
  `hub_id` bigint DEFAULT NULL,
  `hub_employee_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`manage_otp_id`),
  UNIQUE KEY `UK_g9oulvamnlrsbkvfxyahlwika` (`admin_id`),
  UNIQUE KEY `UK_1pn1bk9iwahlyythnw2vr4pf` (`courier_id`),
  UNIQUE KEY `UK_gdy1lfqundf63euac0nnrc4xs` (`driver_id`),
  UNIQUE KEY `UK_o0poo68fkju2yj80b9d9hiymo` (`hub_id`),
  UNIQUE KEY `UK_62kkfn96yah8p2m9u1hsq59nc` (`hub_employee_id`),
  UNIQUE KEY `UK_j734ks2pnnics0cn02tttgh3r` (`user_id`),
  CONSTRAINT `FK1cqmw2a1yubfu40voc2pv5e3c` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKdgjudf3taa4l0faclxeqdwqy1` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`admin_id`),
  CONSTRAINT `FKdv9aexxp29gn3g206g9vtmj0w` FOREIGN KEY (`hub_id`) REFERENCES `hub` (`hub_id`),
  CONSTRAINT `FKi6qmdoie2doacdp5vhcovkrg9` FOREIGN KEY (`hub_employee_id`) REFERENCES `hub_employee` (`hub_employee_id`),
  CONSTRAINT `FKk9dix49mjgvktlwawua5icbiq` FOREIGN KEY (`courier_id`) REFERENCES `courier` (`courier_id`),
  CONSTRAINT `FKt0473gbxlj4ovpvbdy5ifm028` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`driver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manage_otp`
--

LOCK TABLES `manage_otp` WRITE;
/*!40000 ALTER TABLE `manage_otp` DISABLE KEYS */;
INSERT INTO `manage_otp` VALUES (52,NULL,NULL,NULL,NULL,52,NULL,NULL,NULL,NULL),(102,NULL,NULL,NULL,NULL,102,NULL,NULL,NULL,NULL),(152,NULL,NULL,NULL,NULL,152,NULL,NULL,NULL,NULL),(202,NULL,NULL,NULL,NULL,202,NULL,NULL,NULL,NULL),(252,NULL,NULL,NULL,NULL,NULL,452,NULL,NULL,NULL),(303,'1111',NULL,'9408',NULL,254,NULL,NULL,NULL,NULL),(352,NULL,NULL,NULL,NULL,302,NULL,NULL,NULL,NULL),(402,NULL,NULL,'4157',NULL,NULL,NULL,NULL,NULL,1),(452,'6503',NULL,'8598',NULL,NULL,502,NULL,NULL,NULL),(502,'8192','2252',NULL,NULL,NULL,NULL,NULL,NULL,202),(503,NULL,NULL,'2252',NULL,NULL,NULL,NULL,NULL,102);
/*!40000 ALTER TABLE `manage_otp` ENABLE KEYS */;
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
