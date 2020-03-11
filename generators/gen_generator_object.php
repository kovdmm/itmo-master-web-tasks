<?php
function cc() {
	for ($i = 0; ; $i++) {
		yield $i;
	}
}

$gen_cc = cc();

for ($gen_cc->next(); $gen_cc->current() <= 3; $gen_cc->next()){
	echo($gen_cc->current());
}