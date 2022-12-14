/*
 * Copyright (c) Huawei Technologies Co., Ltd. 2020-2020. All rights reserved.
 * Generated by the CloudDB ObjectType compiler. DO NOT EDIT!
 */

class users {
    getFieldTypeMap() {
        let fieldTypeMap = new Map();
        fieldTypeMap.set('id', 'String');
        fieldTypeMap.set('nickname', 'String');
        fieldTypeMap.set('email', 'String');
        fieldTypeMap.set('phone_number', 'String');
        fieldTypeMap.set('color', 'String');
        fieldTypeMap.set('picture_url', 'String');
        fieldTypeMap.set('provider_id', 'String');
        return fieldTypeMap;
    }

    getClassName() {
        return 'users';
    }

    getPrimaryKeyList() {
        let primaryKeyList = [];
        primaryKeyList.push('id');
        return primaryKeyList;
    }

    getIndexList() {
        let indexList = [];
        return indexList;
    }

    getEncryptedFieldList() {
        let encryptedFieldList = [];
        return encryptedFieldList;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setNickname(nickname) {
        this.nickname = nickname;
    }

    getNickname() {
        return this.nickname;
    }

    setEmail(email) {
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setPhone_number(phone_number) {
        this.phone_number = phone_number;
    }

    getPhone_number() {
        return this.phone_number;
    }

    setColor(color) {
        this.color = color;
    }

    getColor() {
        return this.color;
    }

    setPicture_url(picture_url) {
        this.picture_url = picture_url;
    }

    getPicture_url() {
        return this.picture_url;
    }

    setProvider_id(provider_id) {
        this.provider_id = provider_id;
    }

    getProvider_id() {
        return this.provider_id;
    }
}

module.exports = {users}