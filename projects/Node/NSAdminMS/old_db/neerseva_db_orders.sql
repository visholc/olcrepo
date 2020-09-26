-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: neerseva_db
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_number` varchar(45) DEFAULT NULL,
  `order_date` varchar(45) DEFAULT NULL,
  `order_time` varchar(45) DEFAULT NULL,
  `order_by_customer_id` varchar(45) DEFAULT NULL,
  `order_by_customer_contact` varchar(45) DEFAULT NULL,
  `order_by_customer_email` varchar(45) DEFAULT NULL,
  `order_status` varchar(45) DEFAULT NULL,
  `order_location_code` varchar(45) DEFAULT NULL,
  `order_type` varchar(45) DEFAULT NULL,
  `order_is_cancelled` varchar(45) DEFAULT NULL,
  `order_is_paid` varchar(45) DEFAULT NULL,
  `order_payment_type` varchar(45) DEFAULT NULL,
  `order_payment_date` varchar(45) DEFAULT NULL,
  `order_payment_time` varchar(45) DEFAULT NULL,
  `order_payment_method` varchar(45) DEFAULT NULL,
  `order_payment_transaction_id` varchar(45) DEFAULT NULL,
  `order_payment_customer_contact` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (4,'42342','12/12/2018','12:10 PM',NULL,NULL,NULL,'Pending',NULL,'Online',NULL,NULL,NULL,NULL,NULL,'sfdsdf',NULL,NULL),(5,'3434','09/11/2018','02:10 PM',NULL,NULL,NULL,'In Process',NULL,'Order type',NULL,NULL,'sdfdsf',NULL,NULL,NULL,NULL,NULL),(6,'fgdgdfg','dgdfgdfdfgdfgd','dgfdfgd',NULL,NULL,NULL,'Canceled by vendor',NULL,'gdfgdfg',NULL,NULL,'dgdfgdfgd',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-11 23:36:31
