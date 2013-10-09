<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration,
    Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your need!
 */
class Version20131009234434 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is autogenerated, please modify it to your needs
         $this->addSql("
          DELETE FROM  `category_group` ;
          INSERT INTO `category_group` (`id`, `code`, `name`, `depth`) VALUES
				(1, 'course', '课程分类', 2);
          DELETE FROM  `category` ;
		INSERT INTO `category` (`id`, `code`, `name`, `path`, `weight`, `groupId`, `parentId`) VALUES
		(1, 'default', '默认分类', '', 100, 1, 0);
         	");

    }

    public function down(Schema $schema)
    {
        // this down() migration is autogenerated, please modify it to your needs

    }
}
