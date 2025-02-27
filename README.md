# 📘 Documentation Technique - CI/CD avec CircleCI

## 🏗️ Gestion des branches

Le projet suit une approche GitFlow classique avec trois branches principales :

- **`develop`** : branche de développement où sont intégrées les nouvelles fonctionnalités.
- **`integration`** : environnement de test intermédiaire avant la mise en production.
- **`main`** : branche principale contenant le code stable et validé.

Branches secondaires :

- **`feature/*`** : branches dédiées aux nouvelles fonctionnalités.
- **`hotfix/*`** : branches utilisées pour corriger rapidement un bug en production.

## 🔄 Workflow de développement en agilité

1. **Création d’une nouvelle fonctionnalité** :
   - Un développeur crée une branche `feature/nom-fonctionnalité` à partir de `develop`.
   - Développement et tests en local.
   - Validation avec une **Pull Request** vers `develop`.
2. **Validation et intégration** :

   - Une fois la PR approuvée, la branche `feature/*` est fusionnée dans `develop`.
   - Déploiement automatique sur l’environnement de développement.
   - Exécution des tests unitaires et d’intégration.

3. **Préparation à la mise en production** :

   - Les modifications validées sont fusionnées dans `integration`.
   - Déploiement automatique en staging.
   - Exécution des tests de performance et de validation.

4. **Déploiement en production** :
   - Une fois les tests validés, la branche `integration` est fusionnée dans `main`.
   - Déploiement automatique en production.
   - Surveillance post-déploiement.

## ⚙️ Description technique des jobs

### **1. Build**

- **`install_dependencies`** : Installe les dépendances et vérifie la présence de Next.js.
- **`code_analysis`** : Exécute une analyse statique du code.
- **`clean_package_and_update`** : Nettoie, installe les dépendances et prépare l’application.
- **`build_project`** : Compile le projet.

### **2. Tests**

- **`unit-tests`** : Exécute les tests unitaires.
- **`integration_tests`** : Vérifie l’intégration des composants.
- **`regression_tests`** : Vérifie la non-régression.
- **`performance_tests`** : Teste la performance de l’application après la mise en production sur main ou integration.
- **`security_tests`** : Vérifie la sécurité du code.
- **`compatibility_tests`** : Vérifie la compatibilité avec différents environnements.
- **`accessibility_tests`** : Teste l’accessibilité du projet.

### **3. Déploiement**

- **`push_version`** : Génère un tag de version basé sur la branche active.
- **`deploy_environment_prep`** : Prépare l’environnement de déploiement.
- **`deploy_development`** : Déploie la version en développement.
- **`deploy_staging`** : Déploie la version de staging.
- **`deploy_production`** : Déploie la version en production.

### **4. Gestion des branches spécifiques**

- **`create_pr_feature`** : Crée automatiquement une PR pour les branches `feature/*`.
- **`test_hotfix_necessary`** : Exécute uniquement les tests critiques sur les branches `hotfix/*`.

## 📸 Captures d’écran des pipelines exécutés

Les capture d'ecrans sont directement disponible dans le dossier [documentation](./documentation)

## 🔗 Référentiel GitHub

Lien vers le dépôt public : [🔗 GitHub Repository](https://github.com/TimMoyence/test_indus_nest)
