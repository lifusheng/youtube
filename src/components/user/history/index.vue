


<template>
    <div class="js-history-section">
        <c-header></c-header>
        <div class="opt-nav-wrap">
            <div class="view-history" :class="{ on: isShowView }"  @click='view()'>
                <span>观看记录</span>
            </div>
            <div class="search-history"  :class="{ on: !isShowView }" @click="search()">
                <span>搜索记录</span>
            </div>
        </div>
        <div class="view-history-content" v-if="isShowView">
            <div class="layer-page">
                <div class="opt-box">
                    <div class="del-all">全部清除</div>
                </div>
                <div class="no-history">
                    暂无记录
                </div>
                <!--<div class="item"></div>-->
            </div>
        </div>
        <div class="search-history-content" v-else="">
            <div class="layer-page">
                <div class="opt-box">
                    <div class="del-all">全部清除</div>
                </div>
                <div class="item">
                    <div class="item-info">
                        <div class="txt-name">haha</div>
                        <div class="bn">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div class="history-time">
                        <span>22</span>
                        <span>分钟以前</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isShowView:true
            }
        },
        methods:{
            view(){
                this.isShowView = true;
            },
            search(){
                this.isShowView = false;
            }
        }
    }
</script>