export default class NotefulApi {
    constructor() {
        //this.baseUrl = process.env.REACT_APP_NOTEFUL_PROD_API_URL || 'http://localhost:9090'
        this.baseUrl = 'http://localhost:9090'
        this.serverErrorMsg = 'An Error has Occurred while attempting to reach the service'
    }

    async getFolders() {
        const res = await fetch(`${this.baseUrl}/folders`)

        if (!res.ok) {
            throw new Error(this.serverErrorMsg)
        } else {
            return res.json()
        }
    }

    async getNotes() {
        const res = await fetch(`${this.baseUrl}/notes`)

        if (!res.ok) {
            throw new Error(this.serverErrorMsg)
        } else {
            return res.json()
        }
    }

    async addFolder(folder) {
        const res = await fetch(`${this.baseUrl}/folders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(folder)
        })

        if (!res.ok) {
            throw new Error(this.serverErrorMsg)
        } else {
            return res.json()
        }
    }

    async addNote(note) {
        const res = await fetch(`${this.baseUrl}/notes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        })

        if (!res.ok) {
            throw new Error(this.serverErrorMsg)
        } else {
            return res.json()
        }
    }

    async deleteNote(noteId) {
        const res = await fetch(`${this.baseUrl}/notes/${noteId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })

        if (!res.ok) {
            throw new Error(this.serverErrorMsg)
        } else {
            return
        }
    }
}