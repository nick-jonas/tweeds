rm -rf output
node r.js -o build.js

cp ../www_public/index.php output/index.php
REQUIRE_VERSION='1.0.5'
SEDCMD='sed -i'
if [[ $OSTYPE == *"darwin"* ]]; then
  SEDCMD=$SEDCMD' .tmp'
fi
SEDCMD=$SEDCMD' s/js\/libs\/require\/require.js/http:\/\/requirejs.org\/docs\/release\/'$REQUIRE_VERSION'\/minified\/require.js/g output/index.php'
$SEDCMD
rm -f output/*.tmp
