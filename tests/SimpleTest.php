<?php

use PIN\Validator as P;
use PHPUnit\Framework\TestCase;

class SimpleTest extends TestCase {
	const PINS = ['244713', '560029', '560030', '110011'];

	const INVALID_PINS = ['999999', '99999', '9999', '999', '99', '9', '111111', '2447131'];

	public function testSamplePins() {
		foreach(self::PINS as $pin) {
			$this->assertTrue(P::validate($pin), "$pin should be valid");
		}

		foreach(self::INVALID_PINS as $pin) {
			$this->assertFalse(P::validate($pin), "$pin should be invalid");
		}
	}
}
