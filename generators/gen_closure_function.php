<?php
function cc() {
	$value = 0;
	return function() use(&$value) {
		return ++$value;
	};
}

$gen_cc = cc();

echo($gen_cc());
echo($gen_cc());
echo($gen_cc());