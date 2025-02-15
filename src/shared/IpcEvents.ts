/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

export const enum IpcEvents {
    GET_VENCORD_PRELOAD_FILE = "VCD_GET_VC_PRELOAD_FILE",
    GET_VENCORD_RENDERER_SCRIPT = "VCD_GET_VC_RENDERER_SCRIPT",
    GET_RENDERER_SCRIPT = "VCD_GET_RENDERER_SCRIPT",
    GET_RENDERER_CSS_FILE = "VCD_GET_RENDERER_CSS_FILE",

    GET_VERSION = "VCD_GET_VERSION",
    SUPPORTS_WINDOWS_TRANSPARENCY = "VCD_SUPPORTS_WINDOWS_TRANSPARENCY",

    RELAUNCH = "VCD_RELAUNCH",
    CLOSE = "VCD_CLOSE",
    FOCUS = "VCD_FOCUS",
    MINIMIZE = "VCD_MINIMIZE",
    MAXIMIZE = "VCD_MAXIMIZE",

    SHOW_ITEM_IN_FOLDER = "VCD_SHOW_ITEM_IN_FOLDER",
    GET_SETTINGS = "VCD_GET_SETTINGS",
    SET_SETTINGS = "VCD_SET_SETTINGS",

    SELECT_VENCORD_DIR = "VCD_SELECT_VENCORD_DIR",

    UPDATER_GET_DATA = "VCD_UPDATER_GET_DATA",
    UPDATER_DOWNLOAD = "VCD_UPDATER_DOWNLOAD",
    UPDATE_IGNORE = "VCD_UPDATE_IGNORE",

    SPELLCHECK_SET_LANGUAGES = "VCD_SPELLCHECK_SET_LANGUAGES",
    SPELLCHECK_RESULT = "VCD_SPELLCHECK_RESULT",
    SPELLCHECK_REPLACE_MISSPELLING = "VCD_SPELLCHECK_REPLACE_MISSPELLING",
    SPELLCHECK_ADD_TO_DICTIONARY = "VCD_SPELLCHECK_ADD_TO_DICTIONARY",

    SET_BADGE_COUNT = "VCD_SET_BADGE_COUNT",

    CAPTURER_GET_LARGE_THUMBNAIL = "VCD_CAPTURER_GET_LARGE_THUMBNAIL",

    AUTOSTART_ENABLED = "VCD_AUTOSTART_ENABLED",
    ENABLE_AUTOSTART = "VCD_ENABLE_AUTOSTART",
    DISABLE_AUTOSTART = "VCD_DISABLE_AUTOSTART"
}
