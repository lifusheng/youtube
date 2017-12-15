<template>
    <div class="admin">
        <div class="admin-content">
            <div class="edit">
                <div class="avatar">
                    <div class="img">
                        <img :src="avatar" @click="setAvatar">
                        <span>更改</span>
                    </div>
                    <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event)" ref="avatarInput">
                </div>
                <button type="button" @click="edit">确认修改</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                avatar: '/static/images/mini_logo/defaultUser.jpg'
            }
        },
        methods: {
            edit() {
                // 修改了头像
                if (this.$refs.avatarInput.files.length !== 0) {
                    var image = new FormData()
                    image.append('avatar', this.$refs.avatarInput.files[0])
                    this.axios.post('/avatar', image, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                }
            },
            setAvatar() {
                this.$refs.avatarInput.click()
            },
            changeImage(e) {
                var file = e.target.files[0]
                var reader = new FileReader()
                var that = this
                reader.readAsDataURL(file)
                reader.onload = function(e) {
                    that.avatar = this.result
                }
            }
         },
    }
</script>