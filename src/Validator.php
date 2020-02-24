<?php

namespace PIN;

class Validator {
	static $regexes;
	
	public static function validate(string $pin) {
		if(!self::$regexes) {
			self::$regexes = array_filter(file('regex.txt'));
		}

		foreach (self::$regexes as $regex) {
			if (preg_match($regex, $pin) === 1) {
				return true;
			}
		}

		return false;
	}
}