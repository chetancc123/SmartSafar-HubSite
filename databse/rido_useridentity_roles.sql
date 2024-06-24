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
-- Table structure for table `useridentity_roles`
--

DROP TABLE IF EXISTS `useridentity_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useridentity_roles` (
  `useridentity_id` bigint NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`useridentity_id`,`role_id`),
  KEY `FKc93sq7fd24s5j5h4qi6kfuif9` (`role_id`),
  CONSTRAINT `FKc93sq7fd24s5j5h4qi6kfuif9` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKddwtdjp4ycy7fr10pu9aj8co7` FOREIGN KEY (`useridentity_id`) REFERENCES `useridentity` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useridentity_roles`
--

LOCK TABLES `useridentity_roles` WRITE;
/*!40000 ALTER TABLE `useridentity_roles` DISABLE KEYS */;
INSERT INTO `useridentity_roles` VALUES (3,1),(153,1),(502,1),(702,1),(802,1),(1552,1),(2,2),(102,2),(252,2),(352,2),(402,2),(652,2),(752,2),(852,2),(902,2),(952,2),(1002,2),(1003,2),(1352,2),(1502,2),(504,3),(52,4),(103,4),(203,4),(602,4),(1,5),(202,5),(452,5),(1052,6),(1102,6),(1152,6),(1202,6),(1252,6),(1302,6),(1404,6),(1452,6);
/*!40000 ALTER TABLE `useridentity_roles` ENABLE KEYS */;
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
