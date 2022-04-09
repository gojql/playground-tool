<template>
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
                            <div class="col">
                                <label class="form-label" for="jsonInput">JSON String</label>
                                <textarea class="form-control" id="jsonInput" v-model="obj.jsonInput" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border bg-light">
                            <div class="col">
                                <label class="form-label" for="jsonInput">Query Result</label>
                                {{obj.jsonOutput}}
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

export default {
    setup() {
        const obj = reactive({
            jsonInput: '',
            jsonOutput: ''
        });

        const parseData = () => {
            obj.jsonOutput = obj.jsonInput;
        }

        return {
            obj,
            parseData
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