#!/usr/bin/env bash
dir=`pwd`
app="$dir/static/js/app"

app_js=(
app.js
#addons
addons/modal.js
addons/transition.js
addons/typehead.js
addons/angular-moment.js
addons/datetimepicker.js
#admin
admin/admin.js
admin/directive.js
admin/filter.js
#auth
auth/auth.js
auth/service.js
auth/controller.js
#user
user/user.js
user/controller.js
#case
case/case.js
case/controller.js
#talk
talk/talk.js
talk/controller.js


)


#c="cat "
touch "$app/app.concat.js"
for file in "${app_js[@]}"; do
    echo "$app/$file"
    #c="$c $app/$file"
    #echo "$c"
    cat $app/$file >> $app/app.concat.js
done
touch "$app/app.concat.annotated.js"
ng-annotate -a $app/app.concat.js -o $app/app.concat.annotated.js
touch "$app/app.min.js"
java -jar yuicompressor-2.4.7.jar  "$app/app.concat.annotated.js" -o "$app/app.min.js"
rm -rf $app/app.concat.annotated.js $app/app.concat.js

#lessc -x $dir/static/less/module.admin.page.index.less > $dir/static/css/main.css
lessc -x $dir/static/build/less/AdminLTE.less > $dir/static/css/admin.min.css

angular_js_support=(
static/js/lib/angular-ui-router.min.js
static/js/lib/angular/angular-route.min.js
static/js/lib/angular/angular-sanitize.min.js
static/js/lib/angular-file-upload-shim.min.js
static/js/lib/angular-file-upload.min.js
static/js/lib/plugin/textAngular-rangy.min.js
static/js/lib/plugin/textAngular-sanitize.min.js
static/js/lib/plugin/textAngular.min.js
static/js/lib/plugin/country-picker.min.js
static/js/lib/plugin/moment.min.js
)

rm -rf $app/../angular_app.min.js
touch "$app/../angular_app.min.js"
for file in "${angular_js_support[@]}"; do
    echo "$dir/$file"
    cat $dir/$file >> $app/../angular_app.min.js
done

exit 0;
