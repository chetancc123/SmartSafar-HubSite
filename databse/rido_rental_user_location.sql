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
-- Table structure for table `rental_user_location`
--

DROP TABLE IF EXISTS `rental_user_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rental_user_location` (
  `rental_user_location_id` bigint NOT NULL,
  `drop_address` varchar(255) DEFAULT NULL,
  `pickup_address` varchar(255) DEFAULT NULL,
  `user_drop_latitude` double NOT NULL,
  `user_drop_longitude` double NOT NULL,
  `user_pickup_latitude` double NOT NULL,
  `user_pickup_longitude` double NOT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`rental_user_location_id`),
  KEY `FKlwyebtmu3vvb32e5k7wkge96p` (`user_id`),
  CONSTRAINT `FKlwyebtmu3vvb32e5k7wkge96p` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rental_user_location`
--

LOCK TABLES `rental_user_location` WRITE;
/*!40000 ALTER TABLE `rental_user_location` DISABLE KEYS */;
INSERT INTO `rental_user_location` VALUES (1,NULL,'123 Main St',0,0,123.456,456.789,1),(2,NULL,'123 Main St',0,0,123.456,456.789,1),(3,NULL,'123 Main St',0,0,123.456,456.789,1),(4,NULL,'123 Main St',0,0,123.456,456.789,1),(52,NULL,'123 Main St',0,0,123.456,456.789,1),(102,NULL,'123 Main St',0,0,123.456,456.789,1),(152,NULL,'Raipur',0,0,123.456,456.789,1),(202,NULL,'Raipur',0,0,123.456,456.789,1),(252,NULL,'Raipur',0,0,123.456,456.789,1),(353,NULL,'Raipur',0,0,123.456,456.789,1);
/*!40000 ALTER TABLE `rental_user_location` ENABLE KEYS */;
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
