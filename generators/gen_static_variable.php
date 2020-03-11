<?php
function cc() {
	static $count = 0;
	return ++$count;
}

echo(cc());
echo(cc());
echo(cc());