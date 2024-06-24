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
-- Table structure for table `useridentity`
--

DROP TABLE IF EXISTS `useridentity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useridentity` (
  `id` bigint NOT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKegd9rrcvi8ja9eok9gn4323p9` (`username`),
  UNIQUE KEY `UKcvviunakrl7h613gxqr2pbeb6` (`email`),
  UNIQUE KEY `UKgq4u81tqvtnhn5pck9qtj9wcc` (`phone_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useridentity`
--

LOCK TABLES `useridentity` WRITE;
/*!40000 ALTER TABLE `useridentity` DISABLE KEYS */;
INSERT INTO `useridentity` VALUES (1,NULL,'ser123@gmail.com',NULL,'$2a$10$JwETC6XEN9nyuJ8JpYi2q.zXuj7rtB7l1JgkSPc68.BUeYkFmVJ6i','12345678916',NULL),(2,NULL,'mani123@gmail.com','shubham','$2a$10$AbK3wgWKtc0RvXGHFr5JFeQAykm4tPenwdjgwdgpKMqiJRH1DvP3i','+917999232409','mani'),(3,NULL,'goli123@gmail.com',NULL,'$2a$10$s9qAECqnK5OJ2QoKLFDiXOR5.PnoKlc1pTeBWQcNi6Y5j6h5AzErO','12345678913','goli'),(52,NULL,'yash123@gmail.com',NULL,'$2a$10$2L3OA9cMqFx1N/AcYgHHOeeZ8GPzd8/IsgTi2BjKPfRijdnibxmaW','12345678909','yash'),(102,NULL,'shiv123@gmail.com',NULL,'$2a$10$XnCuJxcyLD3drfVe3fypRO.yojy2N.uiRMa/Dtd4YUzdYyk0aQohK','+916266180866','shiv'),(103,NULL,'ash123@gmail.com',NULL,'$2a$10$htAgzzGih2pj.ZQVFSiYrux6r3sTFCtqKDBa4vF3jy4HfWCJKv9.m','123456789091','ash'),(153,NULL,'fake123@gmail.com',NULL,'$2a$10$QvKFVGaBNvai5cyW5c1p5e7y91XroqnQhvsFZ4qraMpU1FWfxMdFe','12345678919','fake'),(202,NULL,'Raja123@gmail.com',NULL,'$2a$10$IaA7L05aYfPTWSfA2AD5AuM4cOULAT6Ys0YjNpDZCYftlECFMQ/P6','12345678926',NULL),(203,NULL,'Ramu123@gmail.com',NULL,'$2a$10$j/f19Q8DgzK9ZwyDoGR5T./Hw3bX/YuZ.UzMTfUNYA/XZLkeTIoZO','123456789092','Ramu'),(252,NULL,'jay123@gmail.com',NULL,'$2a$10$wUsb89BnQts6JTb0iGQ8e.1fIu54ZlagNwrqsz8jixSDbT6llZy2e','+9162661808632','jay'),(352,NULL,'bhim123@gmail.com',NULL,'$2a$10$ftFgO3ULXbTKmc8I8bFx7ezMdcsyUeWkUm/txtHUQh432gAgDdoia','+9162661808652','bhim'),(402,NULL,'aj123@gmail.com',NULL,'$2a$10$LpGb6OGz5Eulgyk2tkTypu5o5iPFqC59FcEndl33YZO/oFfb9cLDC','+9162661808662','aj'),(452,NULL,'mohan123@gmail.com',NULL,'$2a$10$YS5l19/ngGBn3a.WHjx2L.3InCZc3W/ejgLwEyVE7VfNKd/kWSMrW','123456789367','mohan'),(502,NULL,'abhi123@gmail.com',NULL,'$2a$10$/9Mry0eya5I8so8SCuscBOknY40QUO/4TqLpnGnASsuNx9cIfDrI2','12345678987','abhi'),(504,NULL,'admin123@gmail.com',NULL,'$2a$10$sMEWitUsVg/vItVQ69w6teD4iKIGjaeC.DHKWq3/aTwQJpGlXOg/e','1234567854','admin'),(602,NULL,'delhiIAS123@gmail.com',NULL,'$2a$10$9.pY7suYu46hbhgJZhpw9uh4xi52eR/as9VVAk3nURYsYL1Zeodqa','1234567892643',NULL),(652,NULL,'jallu123@gmail.com',NULL,'$2a$10$HoosGelO9rv6Un8.XJUoTuhfvyThftP9420vOSwD5gl1hkKxwe5bm','+91626618086623','jallu'),(702,NULL,'asu123@gmail.com',NULL,'$2a$10$daoq6ctgwIVQH203un7FdeN1lg.MFJmdIc9eRgQwMtHwsMTRK7282','12345678546','asu'),(752,NULL,'ishan123@gmail.com',NULL,'$2a$10$geAfcxPcxl3Ptu1FnP5DTuSQQJ3K8EOcKLyyngE4Lk2gXCxdj3eUm','+916266180866243','ishan'),(802,NULL,'himanshu123@gmail.com',NULL,'$2a$10$Y.g7piUUB1KCSZhZjcYjHOfmxaDRP9.5sgvpSdfm1RCcilmd7jWMu','1234567854856','himanshu'),(852,NULL,'ankit123@gmail.com',NULL,'$2a$10$DaqInOAf5Aktn3268JqqDe2rFP/mHC5wBk7Zx4nrMC.oW0rbuS3vC','+9162661808662431','ankit'),(902,NULL,'vishal123@gmail.com',NULL,'$2a$10$wduZ1xeiuQhJj5a.9FiU8.1Uk3cuBd5HwyBJhjmuP.NUTFBv3TRLW','+9162661808662432','vishal'),(952,NULL,'aaru123@gmail.com',NULL,'$2a$10$8wLQVLA223SBSBqLi0mf/eH4TjJ9sCQu/Qkfb892n6SKf/57wJGJu','+9162661808662436','aaru'),(1002,NULL,'titu123@gmail.com',NULL,'$2a$10$4vdYRCYeBIutlg92w7CMm.Un/EA3hveC0NM2X5s9f2aPHVwpvX5oe','+9162661808662439','titu'),(1003,NULL,'nehu123@gmail.com',NULL,'$2a$10$wd4st4YLionaR4Yd7yGt1OdY0OE5VtwsUlGhUX1m6DNqNJ6/xY8De','+916266180866244','nehu'),(1052,NULL,'jaleshwari@gmail.com','jaleshwari','$2a$10$K8JNv7ERMi29FP2YfIfZ.OZ3/alOQIeOhap2B0QefMcDaDO8TGF2S','5875858559',NULL),(1102,NULL,'jaleshwari1@gmail.com','jaleshwari1','$2a$10$5HugPJ/u1.WpC4tkZkzyauJWT6gvH1NwIwsQQUyk6BeqIb5bE3qdO','58758585459',NULL),(1152,NULL,'jaleshwari2@gmail.com','jaleshwari2','$2a$10$fB3y1fmY1azx.Py3Hexup.YU4ZdNi.dY7t6cDvVCrMgVb7uBN1khe','587586585459',NULL),(1202,NULL,'aadarsh@gmail.com','aadarsh','$2a$10$y7RDlC.ICFBo3l9Fn9rQyufKeLiG5GB8pFeEWdEyK3qEAAuFIMD8W','5678765456754',NULL),(1252,NULL,'Alia@gmail.com','Alia','$2a$10$SwJYdjonk0x7E5nFxEEanecyz4BaI6WZfvq.bpyn5z89b49PMzjCu','56787665456754',NULL),(1302,NULL,'Abhil@gmail.com','Abhil','$2a$10$zII18fW20uLtK/WDGmJ/xePLCPt57GfKAc6hrY9iL9Dr/SNP7V6Za','567876654756754',NULL),(1352,NULL,'AVI@gmail.com',NULL,'$2a$10$oGG0hlIdsc9OsojcXMzoCu46.9lnn5Mpk78.t/bRvsFJHBTXGeHS.','+998781159568','AVI'),(1404,NULL,'jyoti@gmail.com','Anil','$2a$10$IZ3UU7FuBMOoCTMAapDpGOmEyOcWJsz6aKWbBAEBNNLeEmeNANJAu','+919927335197',NULL),(1452,NULL,'Anilkumar@gmail.com','Anil kumar','$2a$10$cNoz3CGI.T3Bza3anRXTjebsocqk61zQINJ9DvwmiVQ8iucB6f6qe','+929867467477',NULL),(1502,NULL,'RISHIKESH@gmail.com',NULL,'$2a$10$LIefSEV8x2kasOiFmRVIH.ePT6De0u8XEmDdGYluImjZOKu16IenW','+918435941523','RISHIKESH'),(1552,NULL,'jaadu@gmail.com',NULL,'$2a$10$sMEWitUsVg/vItVQ69w6teD4iKIGjaeC.DHKWq3/aTwQJpGlXOg/e','+916266180889','jaadu');
/*!40000 ALTER TABLE `useridentity` ENABLE KEYS */;
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
