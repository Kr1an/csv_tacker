#!/bin/bash

OLD_LOCATION=$(pwd)
EXECUTE_LOCATION=$1

function add_extra_code() {
	file_path=$1;
	file_content=$(cat $1);
	# echo $file_content;
	new_content=";function(){$file_content}";
	echo $new_content >> $file_path;
}

function replace_names() {
	function_name_regex='function \K\w+'
	file_path=$1;
	while read -r func_name; do
		random_name="m$(openssl rand -hex 3)";
		echo $func_name;
		echo $random_name;
		random_str="$(openssl rand -hex 6)";
		echo $random_str;
		sed -i -E "s/([^A-Za-z0-9])$func_name([^A-Za-z0-9])/\/*$random_str*\/\1$random_name\2/g" "$file_path"
	done < <(grep -oP "$function_name_regex" "$file_path" | uniq)
}

replace_names "$1";
add_extra_code "$1";

