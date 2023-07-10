<?php

namespace PIN;

class Validator {
  static $regexes;

  public static function init() {
    if(!self::$regexes) {
      self::$regexes = array_map(function($line) {
        return '/' . trim($line) . '/';
      }, array_filter(file('regexes.txt')));
    }
  }

  /**
   * Validate a PIN code
   * @param string $pin
   * @return bool
   */
  public static function validate(string $pin) : bool{
    self::init();

    foreach (self::$regexes as $regex) {
      if (strlen($pin) === 6 and preg_match($regex, $pin) === 1) {
        return true;
      }
    }

    return false;
  }

  /**
   * Search for PIN codes in a string
   * @param string $address
   * @return array
   */
  public static function search(string $address){
    self::init();
    $results = [];

    foreach (self::$regexes as $regex) {
      preg_match_all($regex, $address, $matches);

      $results = array_reduce($matches, function($res, $match) {
        if (isset($match[0]) and in_array($match[0], $res, true) === false){
          $res[] = $match[0];
        }
        return $res;
      }, $results);
    }

    return array_values($results);
  }
}
