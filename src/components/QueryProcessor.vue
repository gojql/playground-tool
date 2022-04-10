<template lang="lang">
<div>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                    <div style="margin:0px;font-size:60px;letter-spacing: -5px;font-weight:bolder;">{ J
            <span style="position:relative;font-size: 60px; top:12px">&#128269;</span>L }
      </div>
      <div style="width:100%"><hr>
        <div style="font-weight: 800;    padding-bottom: 1rem;">Conditions</div>
         <ul style="list-style-type:none;">
            <li>#(...) : first Match</li>
            <li>#(...)# : All Matches</li>
        </ul><br>
        <hr>
        <div style="font-weight: 800;    padding-bottom: 1rem;">Modifiers</div>
        <ul style="list-style-type:none;">
            <li>@uppercase</li>
            <li>@lowercase</li>
            <li>@reverse</li>
            <li>@sort</li>
        </ul><br>
      </div>
                </div>
            </div>
            <div class="col py-3">
                <h5>Try it</h5>
                <div class="row">
                    <div class="col">
                        <div class="input-group">
                            <div class="input-group-text">Query</div>
                            <input id="regex" v-model="obj.query" type="text" class="form-control" placeholder="insert your regular expression here">
                            <div id="submit-regex" class="input-group-text btn-primary rounded" @click.prevent="parseData">Run</div>
                            <div id="copy-regex" class="input-group-text"><img src='@/assets/img/copy.png'/></div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2 gx-3">
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="col" style="height:75vh">
                                <label class="form-label" for="jsonInput">JSON</label>
                                <AceEditor v-model:codeContent="obj.jsonInput" v-model:editor="editor" :options="options" :lang="lang" width="100%" height="95%" />
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="col" style="height:75vh">
                                <label class="form-label" for="jsonInput">Result</label>
                                <AceEditor class="result"  v-model:editor="editor" :options="options" :lang="lang" width="100%" height="95%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
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
            query: '',
            jsonOutput: ''
        });

        const parseData = () => {

            JQLService.parseData({'query':obj.query, 'json':obj.jsonInput})
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
