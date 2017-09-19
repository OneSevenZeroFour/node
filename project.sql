/*
Navicat MySQL Data Transfer

Source Server         : project
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : project

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-09-19 21:01:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale` decimal(10,1) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `imgarr` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `sqty` int(10) DEFAULT NULL,
  `description` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=145 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '45.00', '3.3', '/img/listm-1.jpg', '/img/list-11.jpg,/img/list-12.jpg,/img/list-13.jpg,/img/list-14.jpg,/img/list-15.jpg', '青碧', '12', null);
INSERT INTO `goods` VALUES ('2', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '56.00', '3.6', '/img/listm-2.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '迪奥', '40', null);
INSERT INTO `goods` VALUES ('3', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '34.00', '3.5', '/img/listm-3.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '雅诗兰黛', '50', null);
INSERT INTO `goods` VALUES ('4', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '89.00', '4.5', '/img/listm-4.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '兰蔻', '78', null);
INSERT INTO `goods` VALUES ('5', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '189.00', '3.6', '/img/listm-5.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '欧舒丹', '345', null);
INSERT INTO `goods` VALUES ('6', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '345.00', '4.5', '/img/listm-6.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '资生堂', '3', null);
INSERT INTO `goods` VALUES ('7', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '256.00', '3.7', '/img/listm-7.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '欧碧泉', '23', null);
INSERT INTO `goods` VALUES ('8', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '387.00', '5.7', '/img/listm-8.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '安娜苏', '12', null);
INSERT INTO `goods` VALUES ('9', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '467.00', '3.4', '/img/listm-9.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '植村秀', '532', null);
INSERT INTO `goods` VALUES ('10', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '145.00', '3.7', '/img/listm-10.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '兰芝', '123', null);
INSERT INTO `goods` VALUES ('11', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '593.00', '3.8', '/img/listm-11.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '娇韵诗', '45', null);
INSERT INTO `goods` VALUES ('12', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '693.00', '3.9', '/img/listm-12.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '思亲肤', '445', null);
INSERT INTO `goods` VALUES ('13', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '267.00', '6.8', '/img/listm-13.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '欧莱雅', '379', null);
INSERT INTO `goods` VALUES ('14', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '874.00', '6.7', '/img/listm-14.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '高丝', '234', null);
INSERT INTO `goods` VALUES ('15', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '486.00', '4.6', '/img/listm-15.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '香奈儿', '678', null);
INSERT INTO `goods` VALUES ('16', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1099.00', '4.8', '/img/listm-16.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '科颜氏', '45', null);
INSERT INTO `goods` VALUES ('17', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '578.00', '6.8', '/img/listm-17.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '希思妮', '89', null);
INSERT INTO `goods` VALUES ('18', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '375.00', '4.8', '/img/listm-18.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '雅顿', '500', null);
INSERT INTO `goods` VALUES ('19', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '784.00', '4.9', '/img/listm-19.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '娇兰', '489', null);
INSERT INTO `goods` VALUES ('20', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '345.00', '6.7', '/img/listm-20.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '菲诗小铺诗', '1200', null);
INSERT INTO `goods` VALUES ('21', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1999.00', '3.4', '/img/listm-21.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '青碧', '200', null);
INSERT INTO `goods` VALUES ('22', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '299.00', '4.5', '/img/listm-22.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '雅诗兰黛', '300', null);
INSERT INTO `goods` VALUES ('23', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '566.00', '3.8', '/img/listm-23.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '兰蔻', '3444', null);
INSERT INTO `goods` VALUES ('24', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '390.00', '2.7', '/img/listm-24.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '欧舒丹', '34', null);
INSERT INTO `goods` VALUES ('25', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '200.00', '2.0', '/img/listm-25.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '资生堂', '488', null);
INSERT INTO `goods` VALUES ('26', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '490.00', '1.5', '/img/listm-26.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '欧碧泉', '399', null);
INSERT INTO `goods` VALUES ('27', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '299.00', '1.8', '/img/listm-27.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '安娜苏', '764', null);
INSERT INTO `goods` VALUES ('28', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '388.00', '0.8', '/img/listm-28.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '植村秀', '467', null);
INSERT INTO `goods` VALUES ('29', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '3999.00', '2.5', '/img/listm-29.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '兰芝', '5', null);
INSERT INTO `goods` VALUES ('30', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1888.00', '5.6', '/img/listm-30.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '娇韵诗', '49', null);
INSERT INTO `goods` VALUES ('31', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '499.00', '3.6', '/img/listm-31.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '思亲肤', '688', null);
INSERT INTO `goods` VALUES ('32', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '59.00', '2.5', '/img/listm-32.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '欧莱雅', '590', null);
INSERT INTO `goods` VALUES ('33', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '89.00', '3.8', '/img/listm-33.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '高丝', '667', null);
INSERT INTO `goods` VALUES ('34', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '2576.00', '2.5', '/img/listm-34.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '香奈儿', '321', null);
INSERT INTO `goods` VALUES ('35', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '594.00', '2.5', '/img/listm-35.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '科颜氏', '123', null);
INSERT INTO `goods` VALUES ('36', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '593.00', '2.5', '/img/listm-36.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '希思妮', '234', null);
INSERT INTO `goods` VALUES ('37', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '5978.00', '2.5', '/img/listm-37.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '雅顿', '332', null);
INSERT INTO `goods` VALUES ('38', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '592.00', '2.5', '/img/listm-38.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '菲诗小铺诗', '243', null);
INSERT INTO `goods` VALUES ('39', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '679.00', '2.5', '/img/listm-39.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '', '655', null);
INSERT INTO `goods` VALUES ('40', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '5645.00', '2.5', '/img/listm-40.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '', '243', null);
INSERT INTO `goods` VALUES ('41', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '234.00', '2.5', '/img/listm-41.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '青碧', '876', null);
INSERT INTO `goods` VALUES ('42', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '3455.00', '2.5', '/img/listm-42.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '雅诗兰黛', '456', null);
INSERT INTO `goods` VALUES ('43', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '874.00', '2.5', '/img/listm-43.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '兰蔻', '789', null);
INSERT INTO `goods` VALUES ('44', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '653.00', '2.5', '/img/listm-44.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '欧舒丹', '986', null);
INSERT INTO `goods` VALUES ('45', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '8432.00', '2.5', '/img/listm-45.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '资生堂', '321', null);
INSERT INTO `goods` VALUES ('46', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '234.00', '2.5', '/img/listm-46.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '欧碧泉', '123', null);
INSERT INTO `goods` VALUES ('47', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '863.00', '2.5', '/img/listm-47.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '安娜苏', '356', null);
INSERT INTO `goods` VALUES ('48', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '357.00', '2.5', '/img/listm-48.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '植村秀', '456', null);
INSERT INTO `goods` VALUES ('49', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1243.00', '2.5', '/img/listm-49.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '兰芝', '1212', null);
INSERT INTO `goods` VALUES ('50', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '5983.00', '2.5', '/img/listm-50.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '娇韵诗', '678', null);
INSERT INTO `goods` VALUES ('51', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '463.00', '2.5', '/img/listm-51.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '思亲肤', '590', null);
INSERT INTO `goods` VALUES ('52', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '352.00', '2.5', '/img/listm-52.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '欧莱雅', '4500', null);
INSERT INTO `goods` VALUES ('53', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '694.00', '2.5', '/img/listm-53.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '高丝', '23', null);
INSERT INTO `goods` VALUES ('54', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '437.00', '2.5', '/img/listm-54.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '香奈儿', '234', null);
INSERT INTO `goods` VALUES ('55', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '984.00', '2.5', '/img/listm-55.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '科颜氏', '534', null);
INSERT INTO `goods` VALUES ('56', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '998.00', '2.5', '/img/listm-56.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '希思妮', '78', null);
INSERT INTO `goods` VALUES ('57', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '905.00', '2.5', '/img/listm-57.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '雅顿', '832', null);
INSERT INTO `goods` VALUES ('58', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '4783.00', '2.5', '/img/listm-58.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '娇兰', '3245', null);
INSERT INTO `goods` VALUES ('59', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '5923.00', '2.5', '/img/listm-59.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '菲诗小铺诗', '678', null);
INSERT INTO `goods` VALUES ('60', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '9765.00', '2.5', '/img/listm-60.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '娇兰', '234', null);
INSERT INTO `goods` VALUES ('61', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '357.00', '2.5', '/img/listm-61.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '青碧', '34', null);
INSERT INTO `goods` VALUES ('62', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '8743.00', '2.5', '/img/listm-62.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '雅诗兰黛', '985', null);
INSERT INTO `goods` VALUES ('63', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '488.00', '2.5', '/img/listm-63.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '兰蔻', '457', null);
INSERT INTO `goods` VALUES ('64', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '388.00', '2.5', '/img/listm-64.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '欧舒丹', '900', null);
INSERT INTO `goods` VALUES ('65', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '598.00', '2.5', '/img/listm-65.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '资生堂', '145', null);
INSERT INTO `goods` VALUES ('66', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '389.00', '2.5', '/img/listm-66.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '欧碧泉', '345', null);
INSERT INTO `goods` VALUES ('67', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '498.00', '2.5', '/img/listm-67.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '安娜苏', '65', null);
INSERT INTO `goods` VALUES ('68', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '198.00', '2.5', '/img/listm-68.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '植村秀', '67', null);
INSERT INTO `goods` VALUES ('69', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '20.00', '2.5', '/img/listm-69.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '兰芝', '234', null);
INSERT INTO `goods` VALUES ('70', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '39.00', '2.5', '/img/listm-70.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '娇韵诗', '789', null);
INSERT INTO `goods` VALUES ('71', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '59.00', '2.5', '/img/listm-71.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '思亲肤', '345', null);
INSERT INTO `goods` VALUES ('72', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '78.00', '2.5', '/img/listm-72.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '欧莱雅', '789', null);
INSERT INTO `goods` VALUES ('73', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '79.00', '2.5', '/img/listm-73.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '高丝', '124', null);
INSERT INTO `goods` VALUES ('74', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '30.00', '2.5', '/img/listm-74.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '香奈儿', '78', null);
INSERT INTO `goods` VALUES ('75', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '69.00', '2.5', '/img/listm-75.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '科颜氏', '23', null);
INSERT INTO `goods` VALUES ('76', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '156.00', '2.5', '/img/listm-76.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '希思妮', '678', null);
INSERT INTO `goods` VALUES ('77', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '178.00', '2.5', '/img/listm-77.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '雅顿', '789', null);
INSERT INTO `goods` VALUES ('78', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '198.00', '2.5', '/img/listm-78.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '娇兰', '1234', null);
INSERT INTO `goods` VALUES ('79', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '134.00', '2.5', '/img/listm-79.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '菲诗小铺诗', '678', null);
INSERT INTO `goods` VALUES ('80', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '234.00', '2.5', '/img/listm-80.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '希思妮', '798', null);
INSERT INTO `goods` VALUES ('81', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '267.00', '2.5', '/img/listm-81.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '青碧', '845', null);
INSERT INTO `goods` VALUES ('82', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '289.00', '2.5', '/img/listm-82.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '雅诗兰黛', '2134', null);
INSERT INTO `goods` VALUES ('83', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '287.00', '2.5', '/img/listm-83.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '兰蔻', '456', null);
INSERT INTO `goods` VALUES ('84', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '210.00', '2.5', '/img/listm-84.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '欧舒丹', '678', null);
INSERT INTO `goods` VALUES ('85', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '299.00', '2.5', '/img/listm-85.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '资生堂', '4', null);
INSERT INTO `goods` VALUES ('86', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '234.00', '2.5', '/img/listm-86.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '欧碧泉', '345', null);
INSERT INTO `goods` VALUES ('87', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '345.00', '2.5', '/img/listm-87.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '安娜苏', '12', null);
INSERT INTO `goods` VALUES ('88', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '324.00', '2.5', '/img/listm-88.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '植村秀', '45', null);
INSERT INTO `goods` VALUES ('89', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '355.00', '2.5', '/img/listm-89.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '兰芝', '43', null);
INSERT INTO `goods` VALUES ('90', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '356.00', '2.5', '/img/listm-90.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '娇韵诗', '657', null);
INSERT INTO `goods` VALUES ('91', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '399.00', '2.5', '/img/listm-91.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '思亲肤', '567', null);
INSERT INTO `goods` VALUES ('92', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '378.00', '2.5', '/img/listm-92.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '欧莱雅', '678', null);
INSERT INTO `goods` VALUES ('93', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '389.00', '2.5', '/img/listm-93.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '高丝', '90', null);
INSERT INTO `goods` VALUES ('94', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '435.00', '2.5', '/img/listm-94.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '香奈儿', '3', null);
INSERT INTO `goods` VALUES ('95', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '478.00', '2.5', '/img/listm-95.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '科颜氏', '234', null);
INSERT INTO `goods` VALUES ('96', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '480.00', '2.5', '/img/listm-96.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '希思妮', '6', null);
INSERT INTO `goods` VALUES ('97', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '456.00', '2.5', '/img/listm-97.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '雅顿', '7657', null);
INSERT INTO `goods` VALUES ('98', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '490.00', '2.5', '/img/listm-98.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '娇兰', '789', null);
INSERT INTO `goods` VALUES ('99', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '499.00', '2.5', '/img/listm-99.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '菲诗小铺诗', '4553', null);
INSERT INTO `goods` VALUES ('100', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '478.00', '2.5', '/img/listm-100.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '植村秀\r\n兰芝\r\n娇韵诗\r\n思亲肤\r\n欧莱雅\r\n高丝\r\n香奈儿\r\n科颜氏\r\n希思妮\r\n雅顿\r\n', '590', null);
INSERT INTO `goods` VALUES ('101', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '567.00', '2.5', '/img/listm-101.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '思亲肤', '879', null);
INSERT INTO `goods` VALUES ('102', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '534.00', '2.5', '/img/listm-102.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '欧莱雅', '234', null);
INSERT INTO `goods` VALUES ('103', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '593.00', '2.5', '/img/listm-103.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '高丝', '789', null);
INSERT INTO `goods` VALUES ('104', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '542.00', '2.5', '/img/listm-104.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '香奈儿', '234', null);
INSERT INTO `goods` VALUES ('105', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '599.00', '2.5', '/img/listm-105.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '科颜氏', '567', null);
INSERT INTO `goods` VALUES ('106', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '587.00', '2.5', '/img/listm-106.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '希思妮', '132', null);
INSERT INTO `goods` VALUES ('107', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '694.00', '2.5', '/img/listm-107.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '雅顿', '456', null);
INSERT INTO `goods` VALUES ('108', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '653.00', '2.5', '/img/listm-108.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '娇兰', '567', null);
INSERT INTO `goods` VALUES ('109', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '679.00', '2.5', '/img/listm-109.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '菲诗小铺诗', '57', null);
INSERT INTO `goods` VALUES ('110', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '694.00', '2.5', '/img/listm-110.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '植村秀', '243', null);
INSERT INTO `goods` VALUES ('111', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '610.00', '2.5', '/img/listm-111.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '科颜氏', '67', null);
INSERT INTO `goods` VALUES ('112', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '643.00', '2.5', '/img/listm-112.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '希思妮', '2', null);
INSERT INTO `goods` VALUES ('113', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '764.00', '2.5', '/img/listm-113.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '雅顿', '243', null);
INSERT INTO `goods` VALUES ('114', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '723.00', '2.5', '/img/listm-114.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '娇兰', '456', null);
INSERT INTO `goods` VALUES ('115', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '719.00', '2.5', '/img/listm-115.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '菲诗小铺', '757', null);
INSERT INTO `goods` VALUES ('116', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '789.00', '2.5', '/img/listm-116.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '思亲肤', '986', null);
INSERT INTO `goods` VALUES ('117', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '754.00', '2.5', '/img/listm-117.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '欧莱雅', '789', null);
INSERT INTO `goods` VALUES ('118', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '753.00', '2.5', '/img/listm-118.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '香奈儿', '234', null);
INSERT INTO `goods` VALUES ('119', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '725.00', '2.5', '/img/listm-119.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '科颜氏', '789', null);
INSERT INTO `goods` VALUES ('120', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '876.00', '2.5', '/img/listm-120.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '雅顿', '798', null);
INSERT INTO `goods` VALUES ('121', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '864.00', '2.5', '/img/listm-121.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '娇兰', '2134', null);
INSERT INTO `goods` VALUES ('122', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '829.00', '2.5', '/img/listm-122.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '植村秀', '456', null);
INSERT INTO `goods` VALUES ('123', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '839.00', '2.5', '/img/listm-123.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '希思妮', '123', null);
INSERT INTO `goods` VALUES ('124', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '856.00', '2.5', '/img/listm-124.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '科颜氏', '809', null);
INSERT INTO `goods` VALUES ('125', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '823.00', '2.5', '/img/listm-125.jpg', '/img/listf1.jpg,/img/listf2.jpg,/img/listf3.jpg,/img/listf4.jpg,/img/listf5.jpg', '科颜氏', '24', null);
INSERT INTO `goods` VALUES ('126', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '945.00', '2.5', '/img/listm-126.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '科颜氏', '678', null);
INSERT INTO `goods` VALUES ('127', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '912.00', '2.5', '/img/listm-127.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '科颜氏', '123', null);
INSERT INTO `goods` VALUES ('128', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '978.00', '2.5', '/img/listm-128.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '科颜氏', '5906', null);
INSERT INTO `goods` VALUES ('129', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '910.00', '2.5', '/img/listm-129.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '希思妮', '13', null);
INSERT INTO `goods` VALUES ('130', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '909.00', '2.5', '/img/listm-130.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '希思妮', '234', null);
INSERT INTO `goods` VALUES ('131', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1200.00', '2.5', '/img/listm-131.jpg', '/img/listd1.jpg,/img/listd2.jpg,/img/listd3.jpg,/img/listd4.jpg,/img/listd5.jpg', '希思妮', '35', null);
INSERT INTO `goods` VALUES ('132', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1340.00', '2.5', '/img/listm-132.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '希思妮', '657', null);
INSERT INTO `goods` VALUES ('133', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1890.00', '2.5', '/img/listm-133.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '希思妮', '865', null);
INSERT INTO `goods` VALUES ('134', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '134.00', '2.5', '/img/listm-134.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '希思妮', '213', null);
INSERT INTO `goods` VALUES ('135', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '5916.00', '2.5', '/img/listm-135.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '植村秀', '345', null);
INSERT INTO `goods` VALUES ('136', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1768.00', '2.5', '/img/listm-136.jpg', '/img/listc1.jpg,/img/listc2.jpg,/img/listc3.jpg,/img/listc4.jpg,/img/listc5.jpg', '植村秀', '456', null);
INSERT INTO `goods` VALUES ('137', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '1567.00', '2.5', '/img/listm-137.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '植村秀', '46', null);
INSERT INTO `goods` VALUES ('138', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '4584.00', '2.5', '/img/listm-138.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '植村秀', '68', null);
INSERT INTO `goods` VALUES ('139', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '234.00', '2.5', '/img/listm-139.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '香奈儿', '5', null);
INSERT INTO `goods` VALUES ('140', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '567.00', '2.5', '/img/listm-140.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '香奈儿', '74', null);
INSERT INTO `goods` VALUES ('141', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '189.00', '2.5', '/img/listm-141.jpg', '/img/lista1.jpg,/img/lista2.jpg,/img/lista3.jpg,/img/lista4.jpg,/img/lista5.jpg', '香奈儿', '34', null);
INSERT INTO `goods` VALUES ('142', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '245.00', '2.5', '/img/listm-142.jpg', '/img/listb1.jpg,/img/listb2.jpg,/img/listb3.jpg,/img/listb4.jpg,/img/listb5.jpg', '香奈儿', '46', null);
INSERT INTO `goods` VALUES ('143', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '234.00', '2.5', '/img/listm-143.jpg', '/img/liste1.jpg,/img/liste2.jpg,/img/liste3.jpg,/img/liste4.jpg,/img/liste5.jpg', '香奈儿', '567', null);
INSERT INTO `goods` VALUES ('144', 'Clarins 娇韵诗明眸紧致精华露/眼霜小样/电眼精华 7ml', '59.00', '2.5', '/img/listm-144.jpg', '/img/listg1.jpg,/img/listg2.jpg,/img/listg3.jpg,/img/listg4.jpg,/img/listg5.jpg', '香奈儿', '234', null);

-- ----------------------------
-- Table structure for infor
-- ----------------------------
DROP TABLE IF EXISTS `infor`;
CREATE TABLE `infor` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `weibo` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of infor
-- ----------------------------
INSERT INTO `infor` VALUES ('22', '刘备', '123', '123123', '123123', 'undefined', '123123');
INSERT INTO `infor` VALUES ('18', '刘勉', '阿斯达斯123132', '12312312', '123123123', '123123', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `birthday` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `grade` varchar(255) DEFAULT NULL,
  `himg` varchar(255) NOT NULL,
  `msg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('liumian', '123456', '123@qq.com', '男', '19901001', '18272104235', '50', '', null);
INSERT INTO `user` VALUES ('张三', '123456', '123@qq.com', '男', '19981201', '13456378792', '30', '', null);
INSERT INTO `user` VALUES ('李四', '123456', '123@qq.com', '男', '19970903', '13287691234', '40', '', null);
INSERT INTO `user` VALUES ('lium', 'c08e0983d75267ee6a22acb41fb3c593', '', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('', 'e10adc3949ba59abbe56e057f20f883e', '', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('liumian123', '2a9e2dea66aba84f5d7493e7ea6a6a20', '', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('liumian1234', 'fa91e2824a32337c3e78d680fdeab786', '', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('liumian666', '6af905b1b54306cc254d017d850d3a6a', '123@qq.com', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('liumian6666', '5d2b282c1bfee23399551ebf3d57f30c', '', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('asdasdasd', '3530178683401da21ade427f853b6fc6', 'adsd@qq.com', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('A123123123', 'fc5b7e953d03fc8f3e3439e77dffc454', '775605515@QQ.COM', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('liumian111111', '40a104d897c2e40afa1086209a2a0c17', 'liu@qq.com', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('liumian234', '13f15f773a24e8733476049073ed0a2b', 'asda@qq.com', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('sadfsadf', '63c4e20fc27297cc90789e01a444646b', 'SADFWEQF', '', '', '', '', '', null);
INSERT INTO `user` VALUES ('afdsaf', 'dc483e80a7a0bd9ef71d8cf973673924', 'asdasd@qq.com', '', '', '', '', '', null);
