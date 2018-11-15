/*
 Navicat Premium Data Transfer

 Source Server         : mysql-localhost
 Source Server Type    : MySQL
 Source Server Version : 100121
 Source Host           : localhost:3306
 Source Schema         : node_crudapi

 Target Server Type    : MySQL
 Target Server Version : 100121
 File Encoding         : 65001

 Date: 16/11/2018 03:32:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `variant` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `url_img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of product
-- ----------------------------
BEGIN;
INSERT INTO `product` VALUES (8, 'Milkshake', 'Best selller is milkshake', 'https://www.delish.com/cooking/recipe-ideas/a20760804/easy-milkshake-recipe/');
INSERT INTO `product` VALUES (10, 'Milk Tea', 'Milk tea is combine either tea and milk', 'https://www.delish.com/cooking/recipe-ideas/a20760804/easy-milkshake-recipe/');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `user` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `name` varchar(225) NOT NULL,
  `rule` varchar(20) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (67, 'admin', 'admin123', 'admin', '1', '086543219876', '1');
INSERT INTO `user` VALUES (68, 'user', 'user123', 'user', '2', '081426371', '1');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
