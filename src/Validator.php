<?php

namespace PIN;

class Validator {
	static $regex;
  static $exactRegex;

  public static function init(){
    if(!self::$regex) {
      self::$regex = "/" . trim(file_get_contents('regex.txt')) . "/";
      self::$exactRegex = "/^" . trim(file_get_contents('regex.txt')) . "$/";
    }
  }

	public static function validate(string $pin) {
		self::init();

    fwrite(STDERR, var_dump(self::$exactRegex, TRUE));

		if (strlen($pin) === 6 and preg_match(self::$exactRegex, $pin) === 1) {
			return true;
		}

		return false;
	}

  public static function search(string $address) {
    self::init();
    preg_match_all(self::$regex, $address, $matches);

    return array_map(function($match) {
      return $match[0];
    }, $matches);
  }
}
