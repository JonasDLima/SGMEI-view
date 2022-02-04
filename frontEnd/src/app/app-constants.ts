export class AppConstants {
    public static get base(): String { return "http://localhost:8080/" }

    public static get validateAccessData(): String { return this.base + "usuarios/validarSenha" }

    public static get baseLogin(): String { return this.base + "login" }
}
