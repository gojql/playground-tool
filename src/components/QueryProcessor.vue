<template lang="lang">
<div>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                    Left Side Content
                </div>
            </div>
            <div class="col py-3">
                <h5>REGULAR EXPRESSION</h5>
                <div class="row">
                    <div class="col">
                        <div class="input-group">
                            <div class="input-group-text">Query</div>
                            <input id="regex" type="text" class="form-control" placeholder="insert your regular expression here">
                            <div id="submit-regex" class="input-group-text btn-primary rounded" @click.prevent="parseData">submit</div>
                            <div id="copy-regex" class="input-group-text">copy</div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 gx-3">
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="col" style="height:75vh">
                                <label class="form-label" for="jsonInput">JSON String</label>
                                <AceEditor v-model:codeContent="obj.jsonInput" v-model:editor="editor" :options="options" :lang="lang" width="100%" height="95%" />
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="col" style="height:75vh">
                                <label class="form-label" for="jsonInput">Query Result</label>
                                <pre>{{obj.jsonOutput}}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    reactive
} from 'vue';
import AceEditor from "ace-editor-vue3";
import "brace/mode/javascript";
import "brace/theme/monokai";
import JQLService from '@/services/jql'

export default {
    components: {
        AceEditor
    },
    setup() {
        const obj = reactive({
            jsonInput: '',
            jsonOutput: ''
        });

        const parseData = () => {
            JQLService.getUser(obj.jsonInput)
                .then(response => {
                    obj.jsonOutput = response.data;
                    console.log(obj.jsonOutput);
                })
                .catch(e => {
                    console.log(e);
                });
        }

        return {
            obj,
            parseData,
            editor: null,
            options: {
                showPrintMargin: false,
            },
            lang: "javascript",
            theme: "monokai",
        }
    }
}
</script>

<style scoped>
textarea {
    resize: none;
    width: 100%;
}
</style>
