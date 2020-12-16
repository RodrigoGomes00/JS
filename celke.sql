CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `cpf` bigint(14) DEFAULT NULL,
  `telefone` bigint(14) DEFAULT NULL,
  `cep` int(8) DEFAULT NULL,
  `logradouro` varchar(50) DEFAULT NULL,
  `numero` varchar(20) DEFAULT NULL,
  `bairro` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


INSERT INTO `pagamentos` (`id`, `nome`, `email`,`cpf`, `telefone`, `cep`, `logradouro`, `numero`, `bairro`, `cidade`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'rodrigo', 'digojales@hotmail.com', '48225192877', '11982468043', '07082650', 'rua', '34', 'guarulhos', 'são paulo', '2019-05-05 15:03:53', '2019-05-05 15:03:53');
COMMIT;